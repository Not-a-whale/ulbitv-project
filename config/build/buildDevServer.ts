import {BuildOptions} from "./type/config";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildOptions) {
    return {
        open: true,
        port: options.port,
        historyApiFallback: true,
    }
}
