/*
 * 根据不同路径返回不同内容
 *   方法名+路径名=>函数
 * */

let express=require('express');
//app是请求监听函数没当服务器接收到客户端请求后执行的函数
let app=express();
app.use(function (req, res, next) {
    next();
});
//当客户端请求'/home'的时候
//这里的路径是路径名（pathname，也就是端口号和问号中间的部分）
app.get('/home',function (req, res) {
    res.end('home')
});
app.get('/user',function (req, res) {
    res.end('user')
});
app.listen(8080)


app.get('/bootstrap/dist/css/bootstrap.css',function (req,res) {
    res.sendFile(path.resolve('../node_modules/bootstrap/dist/css/bootstrap.css'))
});
app.use('/user',user);
