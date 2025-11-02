# RAquino Coding Assignment 12: Web Component Library

## Overview

This project is a React-based UI Component Library built using Storybook and Styled Components. It involves the creation of Component Library using React and Storybook. Additionally the project extends with enhancements in which code quality check has been added to build process using Husky pre-commit hooks that automatically runs Prettier formatting checks, EsLint linting check, and Jest unit tests. And, GitHub Actions CI that runs the same checks on every push or pull requests.

## Features

- Fully responsive components
- Storybook playground with interactive controls
- Jest unit tests for each component
- Husky pre-commit checks (Prettier / ESLint / Tests)
- GitHub Actions continuous-integration workflow

## Setup Instructions

To run the components locally, the following instructions are given:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/raquino_ui_garden.git
   cd raquino_ui_garden

   ```

2. Install dependencies

   ```bash
   npm ci

   ```

3. Run Storybook to interact to components locally.

   ```bash
   npm run storybook

   ```

4. Open your browser to see the Create React App and go to:

   http://127.0.0.1:8018

## Docker Instructions

To containerize the project, the following instructions are given:

1. Build Docker Image Image

   ```bash
   docker build -t aquino_ralph_coding_assignment13 .

   ```

2. Run Docker Container

   ```bash
   docker run -d -p 8018:8018 --name aquino_ralph_coding_assignment13 aquino_ralph_coding_assignment13

   ```

3. Access the site using:

   http://127.0.0.1:8018

## Code Quality and Pre-Commit Checks

Husky runs automatically before every commit to enforce the following:

- Prettier: code style must match .prettierrc
- ESLint: code must pass linting rules
- Tests: related Jest tests must pass
  If any check fails, the commit is blocked until issues are fixed.

You can also run these manually:

```bash
npm run format:check
npm run lint
npm run test:ci
```
