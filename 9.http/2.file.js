let http=require('http');
let fs=require('fs');
let mime=require('mime');
let url=require('url');//内置模块 他可以将路径转化为对象
//第三方模块 帮你处理类型 mime

/*let mime={
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
};*/
http.createServer(function (request, response) {
    let {pathname,query}=url.parse(request.url,true);//true 的作用是将query转为对象
    //获取请求的路径
    if (pathname==='/'){
        response.setHeader('ConTent-Type','text/html;charset:utf-8')
        fs.createReadStream('./index.html').pipe(response);//pipe方法会自动的调用可写流的 write 和end方法
    }else {//  /style.css   /index.js
        let flag=fs.existsSync('.'+pathname);//如果存在再读取，否则404
        if(flag){

            response.setHeader('ConTent-Type',mime.lookup(pathname)+";charset=utf-8");
            //判断路径是否存在 存在再读取
            fs.createReadStream('.'+pathname).pipe(response);
        }else {
            response.statusCode=404;
            response.end('not found')
        }

    }


}).listen(3000)


// fs.readFile('./index.html',function (err, data) {
//     if (err)return console.log(err);
//     response.end(data)
// })
