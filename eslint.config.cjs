const babelParser = require("@babel/eslint-parser");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");

module.exports = [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
  },
];
