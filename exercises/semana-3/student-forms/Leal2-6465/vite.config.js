const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
        '~bootstrap': path.resolve(__dirname,'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8088,
    hot: true
  }
}