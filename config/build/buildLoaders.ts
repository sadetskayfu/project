import { RuleSetRule } from 'webpack'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders(isDev: boolean): RuleSetRule[] {

	const cssLoader = buildCssLoader(isDev)
	const svgLoader = buildSvgLoader()

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const assetLoader = {
		test: /\.(ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
		type: 'asset/resource',
		generator: {
			filename: 'static/[name].[contenthash][ext]',
		},
	}

	// const babelLoader = {
	// 	test: /\.(jsx?|tsx?)$/,
	// 	exclude: /node_modules/,
	// 	use: {
	// 		loader: 'babel-loader',
	// 		options: {
	// 			presets: ['@babel/preset-env'],
	// 			plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
	// 		},
	// 	},
	// }

	return [assetLoader, svgLoader, cssLoader, typeScriptLoader]
}
