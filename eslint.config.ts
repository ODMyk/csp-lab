import typescriptEslint from "typescript-eslint";

import stylistic from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

import prettierConfig from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  typescriptEslint.configs.recommended,
  typescriptEslint.configs.eslintRecommended,
  {
    ignores: [
      "**/node_modules/**/*",
      "**/dist/**/*",
      "eslint.config.ts",
      "vite.config.ts",
      ".prettier.config.ts",
    ],
  },
  {
    languageOptions: {
      parser: typescriptEslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
      },
    },
    plugins: {
      import: importPlugin,
      "@typescript-eslint": typescriptEslint.plugin,
      prettier: prettierPlugin,
      "@stylistic": stylistic,
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.base.json",
        },
      },
    },
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
      "no-constant-condition": [
        "error",
        { checkLoops: false },
      ],
      "no-debugger": "warn",
      "no-alert": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "separate-type-imports",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "unknown",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          warnOnUnassignedImports: true,
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    rules: {
      "@typescript-eslint/restrict-template-expressions":
        "off",
      "@typescript-eslint/no-empty-function": ["warn"],
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/explicit-function-return-type":
        "off",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "import/no-duplicates": "off",
      "@stylistic/padding-line-between-statements": [
          "error",
          {
            "blankLine": "always",
            "prev": "multiline-expression",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "multiline-expression"
          },
          {
            "blankLine": "always",
            "prev": "multiline-const",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "multiline-const"
          },
          {
            "blankLine": "always",
            "prev": "multiline-block-like",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "multiline-block-like"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "if"
          },
          {
            "blankLine": "always",
            "prev": "if",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "try"
          },
          {
            "blankLine": "always",
            "prev": "try",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "switch"
          },
          {
            "blankLine": "always",
            "prev": "switch",
            "next": "*"
          },
          {
            "blankLine": "always",
            "prev": "*",
            "next": "return"
          },
          {
            "blankLine": "always",
            "prev": "return",
            "next": "*"
          }
        ],
    },
  },
]);
