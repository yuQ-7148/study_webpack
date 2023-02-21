const path = require("path") //导入 node.js 中专门操作路径的模块

const HtmlPlugin = require("html-webpack-plugin")

const htmlplugin = new HtmlPlugin({
    template: "./src/index.html", //指定源文件的存放路径
    filename: "./index.html" //指定生成的文件的村放路径
})

module.exports = {
    mode: 'development',  //mode用来指定构建模式，可选值有 development 和 production
    
    entry: path.join(__dirname,"./src/index.js"), //打包入口文件的路径

    output: {
        path: path.join(__dirname,"./dist"), //输出文件的存放路径
        filename: "bundle.js" //输出文件的名称
    },

    devServer: {
        static: "./",
        open: true,
        host: "127.0.0.1",
        port: 80
    },

    plugins: [htmlplugin] //挂载插件的实例对象
}
