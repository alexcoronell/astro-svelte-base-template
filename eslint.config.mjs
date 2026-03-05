import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginSvelte from "eslint-plugin-svelte";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import svelteParser from "svelte-eslint-parser";

export default [
  {
    ignores: [
      "node_modules/",
      "dist/",
      ".astro/",
      "public/",
      ".vscode/",
      "pnpm-lock.yaml",
      "README.md",
      "LICENSE",
      ".gitignore",
    ],
  },
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: tsParser,
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: ["**/*.svelte"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "svelte/no-unused-svelte-ignore": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^\\$\\$(Props|Events|Slots|Generic)$",
        },
      ],
    },
  },
];
