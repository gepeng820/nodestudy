let express = require('../10.express/node_modules/express');
let session = require('../10.express/node_modules/express-session')

let app = express();
app.use(session({
    resave:true,//每次客户端请求服务器的时候，都要重新保存session
    saveUnintialized:true,//保存未初始化的session
    secret:'zfpx'//加密的密钥



}));

app.get('/write',function (req, res) {
    req.session.name='zfpx';
    res.end('write ok')

});

app.get('/read',function (req, res) {
    res.send(req.session.name)
});
app.listen(8080);
