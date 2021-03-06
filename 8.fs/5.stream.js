//可读流readStream 可写流writeStream 他是有顺序的，有起点和终点，不关心文件整体内容，只关心读到内容

let fs=require('fs');
//1.读取时文件必须存在
//2.highWaterMark 默认64k ，分段读取
//3.读取默认都是buffer
let rs=fs.createReadStream('./name',{highWaterMark:1});
//默认这种模式 叫 非流动模式 ->流动模式
//Buffer.concat
let arr=[];
rs.on('data',function (data) {//node会不停的  rs.emit('data',data)
    //console.log(data);//疯狂的触发
    arr.push(data);
    rs.pause();//暂停的是data事件触发
    setTimeout(function () {
       rs.resume();//恢复的是data事件
    },1000)
});
rs.on('end',function () {//当这个文件读取完成后，就会触发end事件
    console.log(Buffer.concat(arr).toString());
});

//on('data') on('end') on('error') pause()  resume()
//req 是一个可读流