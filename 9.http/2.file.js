let http=require('http');
let fs=require('fs');

let mime={
    '.js':'application/javascript',
    '.css':'text/css',
    '.html':'text/html'
};
http.createServer(function (request, response) {
    //获取请求的路径
    let pathname=request.url;
    if (pathname==='/'){
        response.setHeader('ConTent-Type','text/html;charset:utf-8')
        fs.createReadStream('./1.html').pipe(response);//pipe方法会自动的调用可写流的 write 和end方法
    }else {//  /style.css   /index.js
        let flag=fs.existsSync('.'+pathname);//如果存在再读取，否则404
        if(flag){
            let type=mime[pathname.match(/\.\w+$/)[0]];
            response.setHeader('ConTent-Type',type+";charset=utf-8");
            //判断路径是否存在 存在再读取
            fs.createReadStream('.'+pathname).pipe(response)
        }else {
            response.statusCode=404;
            response.end('not found')
        }

    }


}).listen(3000)


// fs.readFile('./1.html',function (err, data) {
//     if (err)return console.log(err);
//     response.end(data)
// })
