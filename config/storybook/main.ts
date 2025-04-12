import type {StorybookConfig} from '@storybook/react-webpack5';
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import path from "path";
import {BuildPaths} from "../build/type/config";
import {RuleSetRule} from 'webpack';

const config: StorybookConfig = {
    "stories": [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-essentials",
        "@storybook/addon-onboarding",
        "@storybook/addon-interactions"
    ],
    "webpackFinal": async (config) => {
        const paths: BuildPaths = {
            entry: '',
            html: '',
            build: '',
            src: path.resolve(__dirname, '../../src'),
        }



        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {...rule, exclude: /\.svg$/i};
            }

            return rule;
        })
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });
        config.module.rules.push(buildCssLoader(true));
        config.resolve?.modules?.push(paths.src);
        config.resolve?.extensions?.push('.ts', '.tsx');
        return config;
    },
    "framework": {
        "name": "@storybook/react-webpack5",
        "options": {}
    }
};
export default config;