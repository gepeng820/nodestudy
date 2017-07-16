let express=require('express');
let app=express();
let user=require('./routes/user');
let category=require('./routes/category');


//现在use里传入了二个参数，第一个参数是路径前缀，第二个参数才是路由中间件
//当客户端请求url地址 /user/siginup的话，也就是说以/user开头的话，才会走user中间件
app.use('/user',user);
//当客户端请求category，才会走category中间件
app.use('/category',category);

app.listen(8000);
//端口号取值范围0-65535
