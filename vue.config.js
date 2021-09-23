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
    css: {
      loaderOptions: {
        css: {},
        postcss: {
          plugins: [
            require('postcss-px2rem')({
              remUnit: 37.5
            })
          ]
        }
      }
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