//文章分类相关的路由放在这里写
// /category/add 增加分类
// /category/delete 删除分类

let express=require('express');

let router=express.Router();

router.get('/add',function (req, res) {
    res.send('增加')
});

router.get('/delete',function (req, res) {
    res.send('删除')
});



module.exports=router;
