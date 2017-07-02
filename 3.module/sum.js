function sum(...arr) {
    //Array.from(arguments) 将arguments转化为数组 es6方法
    //[].slice.call(arguments) 将arguments转化为数组 原生方法
    let total=0
    arr.forEach(item=>total+=item);
    return total;
}

//1.module.exports=sum;
//2.exports.sum=sum;
//3.module.exports.sum=sum;
