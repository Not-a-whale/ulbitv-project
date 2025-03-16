import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import webpack from "webpack";
import {BuildEnv, BuildPaths} from "./config/build/type/config";
import path from "path";



module.exports = (env: BuildEnv) => {

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, './src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode: env.mode,
        paths,
        port: PORT
    });

    return config;
}
