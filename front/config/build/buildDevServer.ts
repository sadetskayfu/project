import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	const { port } = options

	return {
		//static: paths.output,
		// static: {
		//     directory: `${paths.src}/app/assets`,
		//     publicPath: 'assets',
		// },
		port: port,
		open: true,
		historyApiFallback: true, // save route history after reload page
		hot: true,
	}
}
