# RAquino Coding Assignment 12: Web Component Library

## Overview

This project is a React-based UI Component Library built using Storybook and Styled Components. It involves the creation of Component Library using React and Storybook.

## Features

- Fully responsive components
- Storybook playground with interactive controls
- Jest unit tests for each component
- Dockerized build

## Setup Instructions

To run the components locally, the following instructions are given:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/raquino_ui_garden.git
   cd raquino_ui_garden

   ```

2. Install dependencies

   ```bash
   npm install

   ```

3. Run Storybook to interact to components locally.

   ```bash
   npm run storybook

   ```

4. Open your browser to see the Storybook interface and go to:

   http://localhost:6006

5. Build Storybook to build a static version of Storybook to serve via Docker.
   ```bash
   npm run build-storybook
   ```

## Docker Instructions

To containerize the project, the following instructions are given:

1. Build Docker Image Image

   ```bash
   docker build -t raquino_coding_assignment12 .

   ```

2. Run Docker Container

   ```bash
   docker run -d -p 8083:80 --name raquino_coding_assignment12 raquino_coding_assignment12

   ```

3. Access the site using:

   http://127.0.0.1:8083

## Running tests

Run Jest tests for all components using:

```bash
npm test
```
