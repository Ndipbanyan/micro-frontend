const { merge } = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('../package.json')
const devConfig = {
	mode: 'development',
	devServer: {
		port: 8081,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlPlugin({ template: './public/index.html' }),
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: { './MarketingApp': './src/bootstrap' },
			shared: dependencies,
		}),
	],
}

module.exports = merge(commonConfig, devConfig)
