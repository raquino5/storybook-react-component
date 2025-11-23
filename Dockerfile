# Stage 1: Build
# ---------------------
FROM node:20-alpine AS build

WORKDIR /aquino_ralph_final_site

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Run
# ---------------------
FROM nginx:alpine

WORKDIR /aquino_ralph_final_site

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /aquino_ralph_final_site/build /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]
