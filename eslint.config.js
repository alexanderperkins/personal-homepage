import js from "@eslint/js";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Possible errors
      "no-console": "warn",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

      // Best practices
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "error",
      "prefer-template": "error",

      // Style (enforced by Prettier for formatting; ESLint handles logic)
      curly: ["error", "all"],
    },
  },
];
