# RAquino Coding Assignment 14: Portfolio Website (with UI Component Library)

## Overview

This project builds on the previous assignments and uses the UI Garden component library to create a full React Portfolio Website. The portfolio highlights program coursework, provides developer setup documentation, and showcases reusable UI components built in earlier assignments (A12 & A13).

## Portfolio Website (Assignment 14 )

- Basic Information section
- Work / Projects section (title, description, image, link, tech list)
- Skills section (languages, tools, frameworks)
- Resources section (title, icon/image, summary, links)
- Developer Setup section (VS Code setup, terminal setup, fonts, tools)

## UI Component Library (Assignment 12)

- Reusable components: Button, Card, Dropdown, HeroImage, Img, Label, RadioButton, Table, TableHeader, TableRow, TableCell, TableFooter, & Text
- All portfolio sections were bult using these components

## Code Quality & Automation (Assignment 13)

- Husky pre-commit hooks
- Prettier formatting enforcement
- ESLint linting
- Jest tests
- GitHub Actions CI workflow

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

3. Start development server using:

   ```bash
   http://localhost:3000

   ```

4. Open your browser to see the Create React App locally and go to:

   http://localhost:6006

## Docker Instructions for (Assignment 14)

To containerize the project, the following instructions are given:

1. The portfolio must run in a container at localhost:5575, with a working directory named:

   ```bash
   lastName_firstName_final_site

   ```

2. Build Docker Image:

   ```bash
   docker build -t aquino_ralph_coding_assignment14 .

   ```

3. Run Container:

   ```bash
   docker run -d -p 5575:5575 --name aquino_ralph_coding_assignment14_container aquino_ralph_coding_assignment14

   ```

4. Access the site

   ```bash
   http://127.0.0.1:5575

   ```

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
