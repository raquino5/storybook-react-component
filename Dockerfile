# Stage 1: Build
# ---------------------
FROM node:20-alpine AS build


WORKDIR /aquino_ralph_ui_garden_build_checks


COPY package*.json ./


RUN npm ci


COPY . .

# Build CRA (production) and Storybook (component library)
RUN npm run build
RUN npm run build-storybook

# Stage 2: Run
# ---------------------
FROM nginx:alpine

# Working dir name inside the container
WORKDIR /aquino_ralph_ui_garden_build_checks


COPY nginx.conf /etc/nginx/conf.d/default.conf

# Storybook static -> root
COPY --from=build /aquino_ralph_ui_garden_build_checks/storybook-static /usr/share/nginx/html

# CRA build -> /app
RUN mkdir -p /usr/share/nginx/html/app
COPY --from=build /aquino_ralph_ui_garden_build_checks/build /usr/share/nginx/html/app


EXPOSE 8018


CMD ["nginx", "-g", "daemon off;"]
