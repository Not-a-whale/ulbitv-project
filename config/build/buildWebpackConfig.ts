import {BuildOptions} from "./type/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(),
        devtool: mode === "development" ? "inline-source-map" : false,
        devServer: (() => {
            console.log(buildDevServer(options))
            return buildDevServer(options)
        })()
    }
}
