let express = require('express');
//返回一个路由中间件
let router = express.Router();
//定义一个数组保存所有用户
let users=[];

router.get('/signup',function (req, res) {
    //渲染一个模板，返回一个空白的注册表单
    //1参数是模板的相对路径，相对模板的根目录
    res.render('signup')

});

router.post('/signup',function (req, res) {
    //因为我们已经引用过bodyParser中间件，所以req多了一个body属性
    let user=req.body;

    let oldUser=users.find(function (item) {
        return item.username==user.username;
    });
    if(oldUser){
        //back表示返回上一个页面，从哪儿来回哪去
        res.redirect('back')
    }else {
        users.push(user);
        //注册成功之后跳转
        res.redirect('/user/signin');
    }

});
router.get('/signin',function (req, res) {
    //res.send(users)
    res.render('signin')
});
router.post('/signin',function (req, res) {
    let user=req.body;
    let oldUser=users.find(function (item) {
        return item.username==user.username && item.password==user.password;
    });
    if(oldUser){
        res.redirect('/user/welcome')
    }else {
        res.redirect('/user/signin')
    }


});
router.get('/welcome',function (req, res) {
    res.send('welcome to homepage')
});

module.exports=router;
