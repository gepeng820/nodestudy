/*
* 如何在express 中读写cookie
* */

let express = require('../10.express/node_modules/express');
let cookieParser=require('../10.express/node_modules/cookie-parser');

let app = express();

app.get('/write',function (req, res) {

    // res.cookie('name','zfpx',{
    //     domain:'a.zfpx.cn'
    // });

    res.cookie('name','zfpx',{
        //规定此cookie属于哪个路径的，只有当客户端访问哪个路径的时候才会发送此cookie
        path:'/read2'
    })


    //res.cookie('name','zfpx',{

        //expires:new Date(Date.now()+10*1000)//绝对时间
        //maxAge:10*1000;//相对时间
    //})

    res.send('ok')
});

app.get('/read2',function (req, res) {

    res.send(req.cookie)

});


app.listen(8080);
