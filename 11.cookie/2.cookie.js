/**
 * 统计每位客户端访问服务器的次数
 * 当这个客户第一次访问服务器的时候，服务器返回，欢迎你的第一次访问
 *  /visit
 */

let http=require('http');
let querystring=require('querystring');



http.createServer(function (req, res) {
    let url=req.url;

    if(url=='/visit'){

        let cookie=req.headers.cookie;
        let cookObj=querystring.parse(cookie,'; ');
        let visit=cookObj.visit;
        let count=1;
        if (visit){
            count=parseInt(visit)+1;
        }

        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.setHeader('Set-Cookie',`visit=${count}`);
        res.end(`欢迎第${count}访问`)

    }else {
        res.end('404')
    }




}).listen(8080)