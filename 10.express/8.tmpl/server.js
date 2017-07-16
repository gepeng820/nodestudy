let express = require('express');
let path = require('path');

let app = express();
//1.设置模板引擎
//view engine定死的，不能乱写。 ejs jade
app.set('view engine','html');
//2.设置模板的存放目录
//如果存放文件夹的模板名称叫views，那么这句话可以不写，但如果不叫views的话，必须提供
//resolve是从当前路径触发，解析路径
app.set('views',path.resolve('views'));
//设置模板的渲染方法
//当express发现模板的的文件后缀是html的话，会使用ejs来渲染，
app.engine('.html',require('ejs').__express);
/*app.get('/',function (req, res) {
   //render渲染，绘制 express为请求对象res添加了一个render方法
    //第一个参数放模板的相对路径,所以不要以/开头，也不要以.开头
    //渲染就是把静态的模板和动态的数据对象进行混合生成HTML代码的过程
    res.render('index',{title:'首页'});
});*/

app.get('/user',function (req, res) {
   // let id=req.query.id;
    //let name=req.query.name;
   res.render('index',req.query)

});

let users=[{id:1,name:'zfpx1'},{id:2,name:'zfpx2'},{id:3,name:'zfpx3'}];
app.get('/userlist',function (req, res) {
    res.render('users',{users:users})
})

app.listen(8010);