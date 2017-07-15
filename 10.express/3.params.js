//如何在服务器中获得请求中的参数
//请求行 方法名 路径（用问号隔开的两部分）路径名+查询字符串
let express=require('express');
let url=require('url');
let app=express();

//req，res和原生http服务器的请求响应对象是同一个，只不过增加了一些额外的自定义属性
app.get('/user',function (req, res) {
    let method=req.method;
    //let {pathname,query}=url.parse(req.url,true);
    //console.log("pathname=",pathname);//?号前面的路径名
    //console.log('query',query);//？号后面的查询字符串对象
    console.log("pathname=",req.path);//?号前面的路径名
    console.log('query',req.query);//？号后面的查询字符串对象
    console.log(req.headers);
    //{host:'http://www.baidu.com'}
    res.end("ok")
});

let users=[{id:1,name:'zfpx'},{id:2,name:"zfpx02"},{id:3,name:'zfpx03'}];

//路径参数
app.get('/users/:id',function (req, res) {
    let id=req.params.id;
    let user=users.find(item=>item.id==id);
    res.end(user.name)
})

app.listen(8000);