import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BuildOptions } from './types/config'

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
	const { paths, isDev } = options

	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new webpack.ProgressPlugin(),

		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[id].[contenthash:8].css',
		}), // извлекает CSS в отдельные файлы

		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(isDev),
		}),

		isDev ? new ReactRefreshWebpackPlugin() : undefined,

		new BundleAnalyzerPlugin({
			analyzerMode: 'disabled',
		}),
	]
}
