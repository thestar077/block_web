const webpack = require('webpack')
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://172.16.221.53:8282/',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            },
        }
    },
}