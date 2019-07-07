module.exports = {
  devServer: {
    // proxy: 'http://localhost:8081'
    proxy: 'http://localhost:8090'
  },
  // publicPath: process.env.NODE_ENV === 'production' ?
  //   'https://static.founder.hao-idea.com/front-parkinfo/' :
  //   '/',
  // productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     less: {
  //       modifyVars: {
  //         'primary-color': 'rgb(47, 116, 255)',
  //         'link-color': 'rgb(47, 116, 255)',
  //         // 'border-radius-base': '2px',
  //         // 'font-size-base': '16px'
  //       },
  //       javascriptEnabled: true
  //     }
  //   }
  // }
}