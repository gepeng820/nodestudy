let fs=require('fs');
//1.写的默认编辑格式是utf-8编码
//2.没有时会创建 写时会自动生成,写入前会清空文件
//3.如果是对象 需要转化成JSON串写入
//fs.writeFileSync('1.txt',1);

fs.writeFile('3.txt','你好',function (error) {

})
