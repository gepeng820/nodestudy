

let express=require('express');

let app=express();

/*
* 中间键的作用
* 1.可以写一些公共的逻辑，所有的路由公用
* 2.添加一些公用的属性和方法
*   公用的属性: req.path req.query
*   公用的方法: send
* */

app.use(function (req, res, next) {
    let method=req.method;
    console.log(method,req.path);
    res.setHeaer('Content-Type','charset=utf-8;')
    next();
});
//为响应对象添加send属性
//send和end一样都会结束写入响应体，一旦调用以后，则不能再次调用write或end方法了，其实在send方法里面会调用edn方法
app.use(function (req, res, next){
    //不管你是什么类型，都转为字符串，然后调用end方法

    res.send=function () {

    }

});

app.get('/',function (req, res) {
    //send方法用来向客户端(浏览器)发送响应体
    //end只能接收字符串或者buffer
    //send可以接收任意类型 字符串 buffer 对象 数组 数字
    //send也是通过中间件给res对象添加上去的

    res.end('home')
});

app.get('/user',function (req, res) {
    res.end('用户')
});




app.listen(8080);
