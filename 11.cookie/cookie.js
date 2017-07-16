let http=require('http');
let querystring=require('querystring');
let server=http.createServer(function (req, res) {
    let url=req.url;
    //当url的地址是'write'的话就需要写cookie
    if(url=='/write'){
        //set-cookie是固定的，name=zfpx这里可以放一个数组 ['k1=v1','k2=v2']
        res.setHeader('Set-Cookie',['name=zfpx','age=8']);
        res.end('write ok')
    }else if (url=='/read'){
        //当第二次客户端访问服务器，客户端会把本机上次保存的cookie带回给服务器，放在请求头
        //req.headers是一个对象，是从请求头中解析出来的。{host:'http://locallhost:8080',cookie:'name=zfpx'}
        let cookie=req.headers.cookie;
        let cookieObj=querystring.parse(cookie,'; ');
        console.log(cookieObj);
        res.end("read:"+cookieObj.age)
    } else {
        res.end('404')
    }
}).listen(8080)
