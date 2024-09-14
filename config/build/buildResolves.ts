import { ResolveOptions } from 'webpack'
import { BuildPaths } from './types/config'

export function buildResolves(paths: BuildPaths): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		//modules: [paths.src, 'node_modules'],
		mainFiles: ['index.ts'],
		alias: {
			'@': paths.src, // add absolute imports
			classNames: paths.classNames, // custom classnames helper
			moduleClassNames: paths.moduleClassNames, // custom module css helper
		},
	}
}
