import { type BuildOptions } from './types'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildOptions): DevServerConfiguration {
  return {
    hot: true,
    open: true,
    port: options.port,
    historyApiFallback: true
  }
}
