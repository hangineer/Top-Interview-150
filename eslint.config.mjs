import config from "eslint-config-xo";
import {defineConfig} from "eslint/config";

export default defineConfig([
  ...config,
  {
    rules: {
      quotes: ["error", "double"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
    },
  },
]);
