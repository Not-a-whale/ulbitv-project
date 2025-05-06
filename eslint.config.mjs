import {defineConfig} from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';
import reactHooks from 'eslint-plugin-react-hooks';

export default defineConfig([
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: {globals: globals.browser}},
    {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: {js}, extends: ["js/recommended"]},
    i18next.configs['flat/recommended'],
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        plugins: {react: pluginReact, tseslint: tseslint, 'react-hooks': reactHooks},
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
            "jsx-a11y/click-events-have-key-events": "off",
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
        }
    }
]);
