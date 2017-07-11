let fn=(a,b)=>{
    return a+b;
};

let obj={name:1};
let obj2={age:2};
let obj3={...obj,...obj2};

//在前端代码里 尽量使用es6，不要混合用
//let str=require('./a');

import {str} from './a';
document.write(str+'???');
import './index.less'

//js动态添加路径 webpack不会自动打包，图片会被忽略
//需要引入图片
// import banner from './visual_main.jpg';
// let oImg=document.createElement('img');
// oImg.src=banner;
// document.body.appendChild(oImg);