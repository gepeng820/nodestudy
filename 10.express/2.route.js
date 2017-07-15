let express =require('express');
//express 是一个方法，或者说是一个函数,执行此函数可以得到app
//app是一个请求监听函数，会在客户端提交请求到服务器的时候进行
let app=express();
//如何定义路由
//app的方法名和http的请求方法名是一一对应的
//GET POST DELETE PUT OPTIONS HEAD
//第一个参数是路径，第二个参数是请求监听函数
//所有的路径永远是/开头的
app.get('/signup',function (req, res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('注册')
});
app.get('/signin',function (req, res) {
    res.setHeader('Content-Type','text/html;charset=utf-8');
    res.end('登陆')
});
//all代表所有的方法 *匹配所有路径
//路由只要匹配一个就不会向下匹配了
app.all('*',function (req, res) {
    res.end('404 not found')
})
//如果没有匹配到任何一个路由，则会返回404，并且返回响应体Can not get
//监听8080端口 ，启动一个http服务器
app.listen(8080);


