# Astro + Svelte Template

Base template for projects with Astro v5 and Svelte 5, following Clean Architecture principles.

## Tech Stack

- **Framework**: Astro v5 + Svelte 5
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Testing**: Vitest (unit) + Playwright (e2e)
- **Linting**: ESLint + Prettier
- **Hooks**: Husky + lint-staged

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Available Scripts

| Command               | Description                |
| --------------------- | -------------------------- |
| `npm run dev`         | Start development server   |
| `npm run build`       | Run typecheck and build    |
| `npm run preview`     | Preview production build   |
| `npm run lint`        | Run ESLint                 |
| `npm run format`      | Format code with Prettier  |
| `npm run test`        | Run unit tests (Vitest)    |
| `npm run test:run`    | Run unit tests once        |
| `npm run test:e2e`    | Run e2e tests (Playwright) |
| `npm run test:e2e:ui` | Run e2e tests with UI      |
| `npm run check`       | Run Astro typecheck        |

## Project Structure

```
src/
├── components/     # UI Components (Astro/Svelte)
├── core/           # Shared utilities, types, constants
├── layouts/        # Astro layouts
├── pages/          # Astro routes
└── styles/         # Global styles
```

## Architecture

- **UI Layer**: `components/`
- **Domain Layer**: `core/`, `stores/`
- **Framework**: `pages/`, `layouts/`
- **Islands**: Svelte components with partial hydration

## Pre-commit Hooks

The project uses Husky to run linting before each commit:

- ESLint + Prettier on `.js`, `.ts`, `.astro`, `.svelte` files
- Prettier on `.css`, `.json`, `.md`, `.html` files

## License

MIT
