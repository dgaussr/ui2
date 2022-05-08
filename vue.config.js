module.exports = {
  devServer: {
    proxy: {
      '/*/api': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Connection: 'keep-alive'
        }
      },
      '^/api': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true,
        logLevel: 'debug',
        headers: {
          Connection: 'keep-alive'
        }
      }
    }
  },
  publicPath: '/ui/',
  outputDir: 'target/dist',
  assetsDir: 'static',
  transpileDependencies: ['vuetify', 'apexcharts'],
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // eslint-disable-next-line @typescript-eslint/camelcase
        signature_pad: 'signature_pad/dist/signature_pad.js'
      }
    }
  }
}
