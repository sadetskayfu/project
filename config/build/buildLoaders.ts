import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

			// Translates CSS into CommonJS
			{
				loader: 'css-loader',
				options: {
					modules: {
						auto: (resourcePath: string) => Boolean(resourcePath.includes('.module.')),
						localIdentName: isDev ? '[local]--[hash:base64:6]' : '[hash:base64:12]',
						//namedExport: false,
					},
				},
			},

			// Compiles Sass to CSS
			'sass-loader',
		],
	}

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const assetLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
		generator: {
			filename: 'images/[name].[contenthash][ext]',
		},
	}

	const svgLoader = {
		test: /\.svg$/i,
		issuer: /\.[jt]sx?$/,
		use: [{ loader: '@svgr/webpack', options: { icon: true } }],
	}

	const babelLoader = {
		test: /\.(jsx?|tsx?)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [isDev && 'react-refresh/babel'].filter(Boolean),
			},
		},
	}

	return [assetLoader, svgLoader, cssLoader, babelLoader, typeScriptLoader]
}
