//fs file system 文件系统
let fs=require('fs');
let EventEmitter=require('evets');
//fs里的方法 同步 异步
//1.读取内容必须存在，不存在则报错
//2.读取内容默认都是buffer类型
//error-first
let school={};
let EventEmitter=require('evets');
let e=new EventEmitter;

fs.readFile('name','utf-8',function (error, data) {
    if(error)console.log(error);
    school.name=data;
    e.emit('输出')
})
fs.readFile('age','utf-8',function (error, data) {
    if(error)console.log(error);
    school.age=data;
    e.emit('输出')
})

e.on('输出',out);
function out() {//判断对象有几个属性，将对象转化为数组
    if (Object.keys(school).length===2){
        console.log(school);
    }

}

//Promise  承诺  ->  永远没有结果 ->等待  ->成功 resolve -> 失败 reject







/*

let name=fs.readFileSync('name','utf-8');
let age=fs.readFileSync('age','utf-8');
let school={name,age};
console.log(school);*/


