import webpack from "webpack";
import {BuildOptions} from "./type/config";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = {
        test: /\.(js|ts|tsx|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ],
    }

    const cssLoader = buildCssLoader(options.mode === 'development');


    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ];
}
