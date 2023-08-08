## Some notes related to the submission:

- Default user at login is userid 1 (ali).
- Submission contains implementation to load messages from a user and send message 1-on-1.
- Used `user` API to fetch users available to chat.
- On selecting a user from LHS, GET `message` API is called. Since the API was failing for all users (404) at the time of submission, hardcoded const messages can be loaded to test the UI with mock data. Changes to be made to file `src/redux/slices/message-list.ts`.
- On entering a message and clicking on send button from RHS, POST `message` API is called with text. Since the API was failing for all users (404) at the time of submission, hardcoded messages can be loaded to test the UI with mock data. Changes to be made to file `src/redux/slices/create-message.ts`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list