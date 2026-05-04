const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }, //No aparece en Bootstrap Vite 5.3, extratído de 5.2

  server: {
    port: 8080,
    hot: true
  }
}