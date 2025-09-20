import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean): unknown {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => {
                            return !!resourcePath.endsWith(".module.scss");
                        },
                        namedExport: false,
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64]",
                    },
                }
            },
            'sass-loader'],
    }

    return cssLoader;
}