let express=require('express');

let app=express();

//使用中间件函数
//没有路径，则以为着它可以匹配所有的路径
//没有方法，则意味着它可以匹配所有的方法
//中间件和路由规则的执行顺序和排列顺序严格相等
app.use(function (req, res, next) {
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    //next是一个函数，调用他的话可以让请求想下面继续执行
    next()
});
//中间件是一个函数，每当请求到来的时候会执行

app.use(function (req, res, next) {
    console.log('1');
    next()
});

//一旦匹配到路由买就不会再往下运行了，因为路由没有next()
app.get('/home',function (req, res) {
    res.end('首页');
});

app.listen(8080);