import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
	{
		files: [" **/*.ts", "**/*.tsx", "**/*.{js,jsx,ts,tsx}"],
		rules: {
			"@typescript-eslint/no-explicit-any": "warn",
			"react/no-unescaped-entities": "off",
			"@typescript-eslint/no-unused-vars": "error",
			"@typescript-eslint/prefer-nullish-coalescing": "error",
		}
	}
];

export default eslintConfig;
