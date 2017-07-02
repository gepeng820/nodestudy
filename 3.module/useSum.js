let sum=require("./sum");
//sum拿到的是module.exports对象
//1.sum(1,2,3,4,5,6)
//2\3.sum(1,2,3,4,5)
global.sum=sum;
//尽量不要在global上挂载属性