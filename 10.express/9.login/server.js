let express=require('express');
let user=require('./routes/user');
let path=require('path');
let bodyParser=require('body-parser');//请求体解析器

let app=express();
//使用中间件来解析请求体，并把请求体中的内容转成对象，并挂载到req.body上
//基本上所有的中间件都是一个函数，都需要执行
//此中间件可以解析请求体，编码后的url请求体，把请求体转成对象
app.use(bodyParser.urlencoded({extended:true}));


//设置模板的类型，决定添加的模板后缀
app.set('view engine','html');
//设置模板存放的根目录，根路径
app.set('views',path.resolve('views'));
//用来指定某种模板的渲染方法
app.engine('.html',require('ejs').__express);
//user是个变量，它的值指向的是模块的导出对象 module.exports

/*
* 静态文件， 不会动态改变的文件， html css js 图片 图标
* */
//使用静态文件中间件 参数是一个静态文件的根目录
///bootstrap/dist/css/bootstrap.css
//当服务器收到客户端的请求之后，会拼出一个绝对路径，找到这个静态文件
//先得到绝对根目录+路径名
// /user/signup
app.use(express.static(path.resolve('../node_modules')));

app.use('/user',user);



app.listen(8080);

