import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildCssLoader(isDev: boolean) {

	return {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

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

			'sass-loader',
		],
	}
}
