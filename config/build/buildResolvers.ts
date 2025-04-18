import { ResolveOptions } from 'webpack';
import {BuildOptions} from "./type/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  };
}
