import {defineConfig} from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: {globals: globals.browser}},
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: {js}, extends: ["js/recommended"]},
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        rules: {
            "no-console": "warn",
            "no-unused-vars": "warn",
            "no-undef": "off",
            "no-constant-condition": "off",
            "no-empty": "off",
            "no-prototype-builtins": "off",
            "no-irregular-whitespace": "off",
            "no-unsafe-optional-chaining": "off",
            "react/react-in-jsx-scope": "off",
            "react/jsx-indent" : ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            "react/jsx-props-no-spreading": "warn",
            "react/no-deprecated": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
        }
    }
]);
