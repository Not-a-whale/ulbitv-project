import {BuildOptions} from "./type/config";

export function buildDevServer(options: BuildOptions) {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
        hot: true,
        }
}
