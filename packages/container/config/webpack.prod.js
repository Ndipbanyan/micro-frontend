const { merge } = require('webpack-merge')
const commonConfig = require('../config/webpack.common')
const domain = process.env.PRODUCTION_DOMAIN
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('../package.json')
const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contentash].js',
		publicPath: '/container/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'container',
			remotes: { marketing: `marketing@${domain}/marketing/latest/remoteEntry.js` },
			shared: dependencies,
		}),
	],
}
module.exports = merge(commonConfig, prodConfig)
