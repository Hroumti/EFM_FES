# Project Structure

## Root Level

- `index.html` - Main HTML entry point
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite build configuration
- `eslint.config.js` - ESLint rules and configuration

## Source Organization (`src/`)

```
src/
├── main.jsx          # Application entry point with React root
├── App.jsx           # Main application component
├── App.css           # Application-specific styles
├── index.css         # Global styles
├── assets/           # Static assets (images, icons)
│   └── react.svg
└── features/         # Feature-based organization
    ├── store.js      # Redux store configuration
    └── studentSlice.js # Student-related state slice
```

## Architecture Patterns

- **Feature-based structure** - Redux slices organized by domain (student management)
- **Component-first approach** - React functional components with hooks
- **Centralized state management** - Redux Toolkit for application state
- **Asset co-location** - Static assets in dedicated `assets/` folder

## File Naming Conventions

- React components: PascalCase (e.g., `App.jsx`)
- Redux slices: camelCase with "Slice" suffix (e.g., `studentSlice.js`)
- Configuration files: lowercase with dots (e.g., `vite.config.js`)
- Stylesheets: match component names (e.g., `App.css` for `App.jsx`)

## Import Patterns

- Use ES6 imports throughout
- Relative imports for local files
- Absolute imports from `node_modules`
- CSS imports directly in components