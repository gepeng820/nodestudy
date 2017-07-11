//webpack是基于commonjs规范的
//默认需要导出一个对象让webpack来使用
let path=require('path');//resolve join
let HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
   entry:'./src/main.js',//入口 填写相对路径
    output:{
       filename:'bundle.js', //打包后输出文件的名字
       path:path.resolve('./dist') //输出的路径必须是绝对路径
    },
    //使用babel 需要核心包 babel-core babel-loader  rules规则
    module:{
       rules:[
           {test:/\.js$/,use:'babel-loader',exclude:/node_module/},
           //需要两个loader css-loader style-loader 以style标签的形式插入到html文件中，从右往左写
           {test:/\.css$/,use:['style-loader','css-loader']},
           //使用less 需要安装 less less-loader
           {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
           //url-loader 需要file-loader,一般情况 8k以下转化为base64
           {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=8192'}

       ]
    },
    plugins:[//可以放很多插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'//会自动将此html  引入打包后的文件导出到dist目录下
        })
    ]
    //改编成es5代码 匹配js变成es5

};
