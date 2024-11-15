# Zero-to-React 🚀

Welcome to **Zero-to-React**, your launchpad to building React apps that actually spark joy. Whether you're after a barebones setup or a fully-loaded spaceship with Redux warp drives and ShadCN UI thrusters, this template has you covered. Built on modern tools to save you from yak shaving, it’s fast, maintainable, and slightly opinionated (in the good way).

---

## Prerequisites 🛠️

You’ll need:

- [Node.js](https://nodejs.org/) (LTS recommended unless you’re feeling adventurous)
- [pnpm](https://pnpm.io/) (because disk space is precious)
- [degit](https://github.com/Rich-Harris/degit) (to grab only what you need without git baggage)

Install `degit` globally if you don’t have it yet:

```
npm install -g degit
```

---

## Branches 🌿

Pick a branch, clone it, and blast off. Each one’s geared for a different kind of mission.

---

### 1. React

The bare essentials, no frills. Think of it as React with a passport and a toothbrush.

**Includes**:

- [Vite](https://vitejs.dev/): Because waiting for builds is so 2015.
- [TypeScript](https://www.typescriptlang.org/): Make your code a little less “YOLO.”
- [React](https://react.dev/): For building all the things.
- [TailwindCSS](https://tailwindcss.com/): CSS that feels like typing cheat codes.
- [Prettier](https://prettier.io/): Keeps your code formatted and friendships intact.
  - Tailwind class sorting because you like your utilities organized.
  - Import sorting for neat freaks.
- [ESLint](https://eslint.org/): Your snarky code reviewer.

**Use it for**: Minimal setups, quick POCs, or when you just want to React and chill.

```
degit aszusz/zero-to-react#react your-project
```

---

### 2. React + ShadCN

Everything from the **React Branch**, now with components so slick they probably moonlight as UI influencers.

**Includes**:

- [ShadCN/UI](https://ui.shadcn.com/): Accessible components styled with Tailwind on top of [Radix UI](https://www.radix-ui.com/).
- Custom folder structure because I don't like the default one.

**Use it for**: Apps that need pre-built UI components, but you’re too cool for bootstrap-y vibes.

```
degit aszusz/zero-to-react#react-shadcn your-project
```

---

### 3. React + Redux

State management? Yes. Overhead? Just slightly. Add Redux without drowning in boilerplate—this template embraces just enough structure to buy us great scalability and a highly predictable coding style where everything has its exact place. It's the kind of organized overhead you'll appreciate when your app scales to infinity (and beyond).

**Includes**:

- Everything from the **React Branch**.
- [Redux](https://redux.js.org/): Because you’re serious about managing state.
- [Redux DevTools](https://github.com/reduxjs/redux-devtools): Inspect your state changes like a detective in a noir film.
- [Vitest](https://vitest.dev/): Test your code—because bugs are for production, not your dev environment. Or something like that.
- Folder structure:
  - **Immutable Core**: Because mutation is chaos.
  - **Imperative Shell**: Where actions and side effects live.
  - **Declarative View**: React components, keeping it classy.

**Use it for**: Data-heavy apps where you’re juggling state like a circus performer.

```
degit aszusz/zero-to-react#react-redux your-project
```

---

### 4. React + Redux + ShadCN

The full monty: state management and beautiful, accessible components. It’s like the Avengers, but for your app.

**Includes**:

- Everything from the **React-Redux Branch**.
- Everything from the **React-ShadCN Branch**.

**Use it for**: Large apps, ambitious projects, or when you just want to flex your setup.

```
degit aszusz/zero-to-react#react-redux-shadcn your-project
```

---

## Scripts 🎛️

You’ve got scripts. They do things. Run them like so:

- **dev**: `pnpm dev` – Spin up your local server and get coding.
- **build**: `pnpm build` – Ship it (or just make sure it builds first).
- **preview**: `pnpm preview` – See what you built, locally.
- **format**: `pnpm format` – Let Prettier sweep the floors.
- **lint**: `pnpm lint` – Make sure ESLint approves of your life choices.
- **test**: `pnpm test` – Break your code now so it doesn’t break later.
- **all**: `pnpm all` – Formats, lints, and tests in one fell swoop. The responsible dev’s one-stop-shop.

---

## License 📜

What's a license?

---

Now go forth, clone a branch, and make something awesome. Or just play around—Zero-to-React won’t judge. 🚀
