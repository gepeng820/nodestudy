let express=require('express');

let app=express();

app.get('/signup',function (req, res) {
    res.send("登陆")
})

app.get('/signin',function (req, res) {
    res.send("注册")
})

app.all('*',function (req, res) {
    res.send("not found")
})

app.listen(8080)