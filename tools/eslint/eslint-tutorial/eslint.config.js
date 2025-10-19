import noBadString from "./rules/no-bad-string.js";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
    files: ["src/**/*.js"],
		rules: {
			semi: "error",
			"prefer-const": "error",
		},
	},
  {
    files: ["src/**/*.js"],
    plugins: {
      local: {
        rules: {
          "no-bad-string": noBadString.rules["no-bad-string"],
        }
      }
    },
    rules: {
			"local/no-bad-string": "warn",
		},
  }
]);
