const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('../package.json')
const commonConfig = require('./webpack.common')
prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contentash].js',
		publicPath: '/marketing/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'remoteEntry.js',
			exposes: { './MarketingApp': './src/bootstrap' },
			shared: dependencies,
		}),
	],
}
module.exports = merge(commonConfig, prodConfig)
