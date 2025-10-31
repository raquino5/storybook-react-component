# Stage 1: Build
# ---------------------
FROM node:20-alpine AS build


WORKDIR /aquino_ralph_ui_garden_build_checks


COPY package*.json ./


RUN npm ci


COPY . .


RUN npm run build

# Stage 2: Run
# ---------------------
FROM nginx:alpine


COPY --from=build /aquino_ralph_ui_garden_build_checks/build /usr/share/nginx/html


COPY nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 8018
