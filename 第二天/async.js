
let read=(cb)=>{
    setTimeout(()=>{
         str='wohenshuai';
         cb(str)
    },2000)
};

//获取到wohenshuai
read(function (data) {
    console.log(data);
});

//要解决异步问题 就是回调函数，将后续的逻辑当作参数传递给这个函数
//异步永远在同步之后执行，如果同步代码执行不能完成，异步永远不会触发
//浏览器刷新频率18~20毫秒，防止dom渲染用20毫秒
//非阻塞(厨师)是异步的前置条件

//什么是io
//input(输入)从文件系统中读取文件
//Output(输出)想文件系统中写入文件

//单线程 多线程->node是基于js的
//java 多线程 同步
//node 单线程 异步   js中的多线程h5(百度搜索了解一下，面试可能会问)
//如果想开多线程 要开子线程

//多线程（感觉像同一时间干了很多事，快速切换上下文） 单线程




// function a(b) {
//     return b;
// }
//1 箭头函数不需要funtion 声明
//2 如果箭头后面是一个{} 需要些return
//3 this 指向 箭头函数中没有this指向，所以this指向上一级，从而解决了this问题
// let a=(b,c)=>b+c;
//
// function a(b) {
//     return function c(d) {
//         return b+d;
//     }
// }



 // a=b=>{return d=>{return b+d}}

 let a=b=>d=>b+d;

console.log(a(1)(2));

//可以通过箭头函数 解决this问题，或者用bind解决this指向问题
let obj={
    a:function () {
        setTimeout(()=>{
            console.log(this);
        })
    }
};
obj.a();
