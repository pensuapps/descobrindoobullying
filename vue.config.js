const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false,
  pwa: {
    name: 'Descobrindo o bullying',
    short_name: 'Descobrindo o bullying',
    themeColor: '#8C251C',
    msTileColor: '#8C251C',
    background_color: '#8C251C',
    appleMobileWebAppStatusBarStyle: '#8C251C',
    manifestOptions: {
      background_color: '#8C251C'
    }
  }
})
