/**
 * Created by 123 on 2017/7/2.
 */
//只要在文件中，可以不用声明直接使用的 叫做全局对象
//服务端没有window 点击事件 没有那些ajax

//服务端有global global上的对象都可以直接访问->全局对象

// console.log(global);
//process 进程
//Buffer 缓存区 （表示内存）
//clearImmediate setImmediate
//clearInterval  setInterval
//clearTimeout   setTimeout
//console -> log dir info error warn time/timeEnd (不常用)
console.log('a');
setTimeout(function () {
    console.timeEnd('a');
},2000);
//因为配置过node 可以右键run ，可以在命令行下执行某个文件
//在命令行下 通过node+ 文件名执行
//2）setTimeout callback 异步 (事件环，node程序是事件环)

setTimeout(function (data,a) {
    console.log(data,a);
    console.log(this);
},1000,'你好','不好');//你好,setTimeout可以传递参数，这里的this指向setTimeout自己,文件中直接打印this 是空对象