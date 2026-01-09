# Technology Stack

## Core Technologies

- **React 19.2.0** - UI library with functional components and hooks
- **Vite 7.2.4** - Build tool and development server
- **Redux Toolkit 2.11.2** - State management
- **React Router DOM 7.12.0** - Client-side routing
- **ESLint 9.39.1** - Code linting and style enforcement

## Build System

- **Vite** as the primary build tool with React plugin
- **ES Modules** - Project uses `"type": "module"` in package.json
- **Hot Module Replacement (HMR)** enabled for development

## Common Commands

```bash
# Development server with HMR
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build locally
npm run preview
```

## Code Style & Linting

- ESLint configuration with React hooks and React refresh plugins
- ECMAScript 2020+ features enabled
- Unused variables allowed if they follow uppercase pattern (^[A-Z_])
- JSX support configured
- Browser globals available