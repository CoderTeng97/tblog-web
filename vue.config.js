var path = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist', //打包输出目录默认为 dist
  assetsDir: 'static', //生成静态文件，默认为 ''
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:8090'
  },
  lintOnSave: false, //关闭eslint语法验证，默认为 true
}
