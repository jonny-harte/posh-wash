const path = require("path")

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    es2017: true,
    es2020: true,
    jest: true,
  },
  globals: { graphql: true, __PATH_PREFIX__: true },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react-redux/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["emotion", "graphql", "prettier", "react-redux"],
  rules: {
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-danger": "off",
    "graphql/template-strings": [
      `error`,
      {
        env: "relay",
        schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
        tagName: "graphql",
      },
    ],
  },
}
