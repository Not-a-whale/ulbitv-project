import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BundleAnalyzerPlugin} from "webpack-bundle-analyzer";
import {BuildOptions} from "./type/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, mode}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: '[id].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(mode === "development")
        }),
    ]

    if (mode === "development") {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }))
    }

    return plugins;
}
