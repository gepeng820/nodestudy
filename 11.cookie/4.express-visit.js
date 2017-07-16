let express = require('../10.express/node_modules/express');
let cookieParser=require('../10.express/node_modules/cookie-parser');
let app=express();
//使用此中间件以后会在req.cookies属性
app.use(cookieParser());


app.get('/visit',function (req, res) {
   let visit=req.cookies.visit;
   if(visit){
       visit=parseInt(visit)+1;
   }else {
       visit=1;
   }
   res.cookie('visit',visit);
   res.send(`欢迎第${visit}光临`)

});


app.listen(8080);
