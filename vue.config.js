const path = require("path")

function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: '/', //若需要将打包后的文件放在一个文件下，则需要加改文件名 例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/
    outputDir: 'dist', //打包输出目录默认为 dist
    assetsDir: 'static', //生成静态文件，默认为 ''
    // webpack配置
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            //为生产环境修改配置
            console.log("当前为生产环境");
        } else {
            //为开发环境修改配...
            console.log("当前为开发环境");
        }
    },
    lintOnSave: true,// 是否在保存的时候检查
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件，可以将其设置为 false 以加速生产环境构建。
   
    //css配置
    // chainWebpack: config => {
    //   config.resolve.alias
    //     .set('common', resolve('src/common'))
    // },
    
    // webpack-dev-server 配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8090, // 设置项目的启动端口
        https: false, // 启用https
        open: true, //配置自动启动浏览器
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8090/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
                }
            }
        }
    },
    lintOnSave: false, //关闭eslint语法验证，默认为 true
}