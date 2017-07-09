let fs=require('fs');
//64k  16k  4:1
function copy(source,target) {
    //每次读取一次，一次读取4b，每次写入只能写入1个
    let rs=fs.createReadStream(source,{highWaterMark:4});
    let ws=fs.createWriteStream(target,{highWaterMark:1});
    //1.先读取一次去写，如果写不下，此时要暂停
    rs.on('data',function (data) {
        let flag=ws.write(data);
        if(!flag)rs.pause();//如果写不进去了就暂停读取
    });
    ws.on('drain',function () {//抽干，将要写入的内容全部吃完，才算抽干
        console.log('抽干了几次');
        rs.resume();//2.写完后恢复读取
    });
    rs.on('end',function () {
        ws.end();//3.最后关闭读和写的文件
    });
}

