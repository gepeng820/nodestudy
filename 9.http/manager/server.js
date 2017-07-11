
let http=require('http');
let fs=require('fs');
let mime=require('mime');
let url=require('url');
let users=[{username:'zfpx',password:'zfpx',id:1},{username:'admin',password:'admin',id:2}];
http.createServer(function (request, response) {
    let {pathname,query}=url.parse(request.url,true);
    if (pathname==='/'){
        response.setHeader('ConTent-Type','text/html;charset:utf-8')
        fs.createReadStream('./index.html').pipe(response);
    }

    else if(pathname==='/user'){

        let id=query.id;
        switch (request.method){//req.method是大写的 GET
            case 'GET':
                if(id){
                    //获取某个

                }else {
                    //获取全部
                    response.end(JSON.stringify(users));
                }
                break;
            case 'POST':
                //获取请求体中的数据
                let str='';
                request.on('data',function (data) {
                    str+=data;
                });
                request.on('end',function () {
                    let user=JSON.parse(str);//获取要添加的用户
                    user.id=users.length>0?users[users.length-1].id+1:1;
                    users.push(user);
                    response.end(JSON.stringify(users))
                });
                break;
            case 'PUT':
                break;
            case 'DELETE':
                break;

        }
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
}).listen(8000,function () {
    console.log('ok');
});
