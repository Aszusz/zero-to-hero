# Zero-to-React 🚀

Zero-to-React is a flexible project template for React applications, designed to grow with your project needs. Start with a minimal React setup or scale up to a full-featured app with Redux state management and ShadCN components. Built on modern tools like Vite, TypeScript, and Tailwind CSS, Zero-to-React helps you create fast, maintainable apps.

## Prerequisite

- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- [pnpm](https://pnpm.io/) (preferred package manager for efficient dependency management)
- [degit](https://github.com/Rich-Harris/degit) (for cloning specific branches without full git history)

Install degit globally if not already installed:

```
npm install -g degit
```

## Branches

Zero-to-React offers four branches, each tailored for different project setups. Choose the branch that suits your project and get started instantly.

### 1. React Branch

**Technologies**:

- **[Vite](https://vitejs.dev/)**: A fast and optimized development server and build tool.
- **[TypeScript](https://www.typescriptlang.org/)**: Adds static typing to JavaScript for improved reliability.
- **[React](https://react.dev/)**: A library for building user interfaces with a component-based approach.
- **[TailwindCSS](https://tailwindcss.com/)**: A utility-first CSS framework for building responsive, custom UIs.
- **[Prettier](https://prettier.io/)**:
  - Configured to sort imports and Tailwind classes for better readability.
- **[ESLint](https://eslint.org/)**: Linting tool to ensure code quality and enforce best practices.

**Use this branch**: For minimal React projects that don’t require complex state management or additional UI libraries.

```
degit aszusz/zero-to-react#react your-project
```

### 2. React-ShadCN Branch

**Technologies**:

Everything from the **React Branch** plus:

- **[ShadCN/UI](https://ui.shadcn.dev/)**: A library of accessible and customizable components built on [Radix UI](https://www.radix-ui.com/), styled with Tailwind CSS.
- **Custom folder structure**: Organized to enhance scalability and maintainability.

**Use this branch**: For projects that require a rich set of pre-built, accessible UI components to speed up development.

```
degit aszusz/zero-to-react#react-shadcn your-project
```

### 3. React-Redux Branch

**Technologies**:

Everything from the **React Branch** plus:

- **[Redux](https://redux.js.org/)**: A predictable state container for managing application state.
- **[Redux DevTools](https://github.com/reduxjs/redux-devtools)**: Debugging extensions for tracking and inspecting Redux state changes.
- **[Vitest](https://vitest.dev/)**: A Vite-native unit testing framework for ensuring code correctness.
- **Custom folder structure**:
  - **Immutable Core**: Centralized state logic with immutability.
  - **Imperative Shell**: Actions and business logic for handling interactions.
  - **Declarative View**: React components rendering based on the state.

**Use this branch**: For applications requiring advanced state management and testing capabilities, such as dashboards, CRMs, or data-driven apps.

```
degit aszusz/zero-to-react#react-redux your-project
```

### 4. React-Redux-ShadCN Branch

**Technologies**:

- Combines everything from the **React-Redux Branch** and the **React-ShadCN Branch**.

**Use this branch**: For large-scale applications needing both robust state management and a polished, accessible UI framework.

```
degit yourusername/zero-to-react#react-redux-shadcn my-project
```

## Scripts

Each branch comes pre-configured with these scripts for a seamless development experience:

- **dev**: Starts the development server.
  Run with:
  `pnpm dev`

- **build**: Builds the application for production.
  Run with:
  `pnpm build`

- **preview**: Previews the production build.
  Run with:
  `pnpm preview`

- **format**: Formats the codebase using Prettier.
  Run with:
  `pnpm format`

- **lint**: Lints the codebase using ESLint.
  Run with:
  `pnpm lint`

- **test**: Runs unit tests with Vitest (in branches where applicable).
  Run with:
  `pnpm test`

- **all**: Runs `format`, `lint`, and `test` scripts in sequence to ensure code quality.
  Run with:
  `pnpm all`
