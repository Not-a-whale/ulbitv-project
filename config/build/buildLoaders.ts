import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./type/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.mode == "development" ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => {
                            return !!resourcePath.endsWith(".module.scss");
                        },
                        localIdentName: options.mode == "development" ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64]",
                    },
                }
            },
            'sass-loader'],
    }


  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    cssLoader
  ];
}
