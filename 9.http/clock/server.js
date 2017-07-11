
let http=require('http');
let fs=require('fs');
let mime=require('mime');
let url=require('url');
http.createServer(function (request, response) {
    let {pathname,query}=url.parse(request.url,true);
    if (pathname==='/'){
        response.setHeader('ConTent-Type','text/html;charset:utf-8')
        fs.createReadStream('./index.html').pipe(response);
    }
    //1. /clock
    else if(pathname==='/clock'){
        let date=new Date().toLocaleString();
        response.end(JSON.stringify({date}));//string  or buffer

    }
    else {
        let flag=fs.existsSync('.'+pathname);
        if(flag){
            response.setHeader('ConTent-Type',mime.lookup(pathname)+";charset=utf-8");
            fs.createReadStream('.'+pathname).pipe(response);
        }else {
            response.statusCode=404;
            response.end('not found')
        }

    }
}).listen(5000);
