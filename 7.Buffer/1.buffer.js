//1.buffer 代表的是内存，
//2.node为了操作二进制 生产出来的一个类型，buffer一般是看不懂的是二进制，但他默认展示成16进制，可以和字符串无条件转换
//2进制 最大1  16进制 最大(15)f
//在node中只支持utf-8格式
//一个汉字utf8有几个字节  3个字节
//比字节小的单位  一个字节由8个位组成 => 1个汉字由24位组成

//16进制最大值是ff 代表10进制是255
//当前位的最大值*进制^当前所在位-1

//1)声明buffer 固定大小，buffer和数组非常像 有索引 slice
var buffer=new Buffer(12);//字节，随机创建一百个字节长,我们不关心内容是什么样子的，将内容写到内存里
//buffer.fill(0);//手动填充，全部变为0
console.log(buffer);
//2）通过数组
var buffer=new Buffer([16,17,18]);//超出对256取模，加256
console.log(buffer);
//3) 字符串创建
var buffer=new Buffer('特殊');
console.log(buffer.toString());//将buffer转化为字符串
//copy concat
var buffer1=new Buffer('特殊');
var buffer2=new Buffer('人士');
console.log(buffer1.length);//长度是字节的长度
var bigbuffer=new Buffer(12);

buffer1.copy(bigbuffer);
buffer2.copy(bigbuffer,buffer1.length);
console.log(bigbuffer.toString());

//slice 数组的slice 截取 返回的是新数组  深拷贝  浅拷贝:拷贝地址
var arr = [1,2,3]; //ffxxff
var A = [arr,4,5]; //递归循环拷贝
//var newArr = JSON.parse(JSON.stringify(A)); //深拷贝，json中不识别函数
//var newArr = A.slice();//浅拷贝 //[ffxxff,4,5]
let newArr = [];
Object.assign(newArr,A); //浅拷贝es6中  $.extend
arr[0] = 100;
console.log(newArr);

var buffer = new Buffer([1,2,3]); //buffer中放的是 内存地址 [[],[],[]],可以将buffer看成是二维数组
let newBuffer = buffer.slice(0,1);
newBuffer[0] = 100;
console.log(buffer);

// concat是类上的方法 Buffer
var buf1=new Buffer('特殊');
var buf2=new Buffer('人士啊');

//模拟一个concat方法 myConcat
Buffer.myConcat=function (list, totalLength) {
    //1.是否传入totalLength，如果没传递 计算总长  typeOf
    if (typeof totalLength==='undefined'){
        totalLength=0;
        list.forEach(item=>totalLength+=item.length);//计算总长
    }
    //2.创建一个新buffer

    let buffer=new Buffer(totalLength);
    //3.循环数组将每一项拷贝到大Buffer上
    let index=0;
    list.forEach(item=>{
        item.copy(buffer,index);
        index+=item.length
    });
    //4.截取有效长度
    return buffer.slice(0,index);//多余长度 截取掉即可

}


console.log(Buffer.myConcat([buf1, buf2]).toString());