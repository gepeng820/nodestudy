//创建http服务  ip地址 port端口号
//node提供了自带的模块 http

let http=require('http');
let listener=function (request,response) {//监听函数,客户端请求，服务端响应
    //console.log('welcome12345')
    //resquest是一个可写流 ws.write() ws.end()
    //response.write('zzz');//写到响应体中
    response.setHeader('Content-Type','text/plain;charset:utf-8');
    response.setHeader('a',1);
    response.end('gg');//调用end之后 会将内容发送完毕显示到浏览器上
    //favicon.ico发送请求是看心情的，如果发现不存在，以后就不请求了
};
//不要用3000以下端口
let port=3000
http.createServer(listener).listen(3000,function () {
    console.log(port + 'start');
});
//改动服务器代码，必须重新启动
//nodemon 实现自动重启