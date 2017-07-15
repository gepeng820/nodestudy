/*用原生和http模块实现路由 根据客户端请求的方法和路径不同返回不同的内容
*GET /signup 注册
*GET /signin 登陆
* */
//引入http模块，
let http=require('http');
//创建一个http服务器,参数是一个请求监听函数，当服务器收到客户端的请求的时候会执行此监听函数
//req=请求对象  res=响应对象
//乱码的原因是编辑器的编码（utf-8）和浏览器的的编码（GBK）不一样
//1.业务全部放在一个函数里会导致此函数过于庞大
//2.以后重构起来的风险比较大
http.createServer(function (req,res) {
    //获取本次请求的方法
   let method=req.method;
   //获取本次请求的路径
   let url=req.url;
   //当请求的方法是GET 且url地址是/signup的时候
   if(method==='GET'&&url==='/signup'){
       //告诉客户端浏览器我的内容类型是html格式的，文件编码是utf-8
       res.setHeader('Content-Type','text/html;charset=utf-8');
       res.end('注册')
   }else if(method==='GET'&&url==='/signin'){
       res.setHeader('Content-Type','text/plain;charset=utf-8');
       res.end('登陆')
    }else {
       res.end('404 not found')
   }
}).listen(8080,function () {
    console.log("ok");
});

