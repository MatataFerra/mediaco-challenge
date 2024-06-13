import * as tsParser from "@typescript-eslint/parser"
import eslintPluginAstro from "eslint-plugin-astro"

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		processor: "astro/client-side-ts",
		rules: {
			"func-style": ["error", "declaration", { allowArrowFunctions: false }],
		},
	},
	{
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "tsconfig.json",
			},
		},
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
			"func-style": ["error", "declaration", { allowArrowFunctions: false }],
		},
	},
]
