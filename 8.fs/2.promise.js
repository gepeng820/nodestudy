//Promise  承诺  ->  永远没有结果 ->等待  ->成功 resolve -> 失败 reject
//Promise 在node中天生支持 构造函数
function buyPack() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (Math.random()*10>5){
                resolve('ok')
            }else {
                reject('no money')
            }
        },1000)
    })
}

// buyPack().then(function (data) {
//     console.log(data);
// },function () {
//     console.log('失败');
// });

buyPack().then(function (data) {
    console.log(data);
}).catch(function (data) {
    console.log(data)
})
