# Stage 1: Build
# ---------------------
# To build the project
FROM node:20 AS build

# Set working directory inside the container
WORKDIR /aquino_ralph_ui_garden

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all project dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Build the static Storybook files
RUN npm run build-storybook

# Stage 2: Serve Storybook
# ---------------------
# Use lightweight Nginx image to serve static files
FROM nginx:alpine

# Set working directory
WORKDIR /aquino_ralph_ui_garden

# Copy the built storybook from the previous stage
COPY --from=build /aquino_ralph_ui_garden/storybook-static /usr/share/nginx/html

# Expose the port to 8083
EXPOSE 8083

# Starts the server
CMD ["nginx", "-g", "daemon off;"]
