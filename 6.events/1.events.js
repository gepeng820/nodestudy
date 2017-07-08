function Man() {
    this._event={}
}
Man.prototype.on=function (eventName,callback) {
    if(this._event[eventName]){//第二次{'有钱':[buyCar,buyPack]}
        this._event[eventName].push(callback)
    }else {//第一次 {'有钱':[buyCar]}
        this._event[eventName]=[callback];
    }
};
Man.prototype.emit=function (eventName) {
    if(this._event[eventName]){
        this._event[eventName].forEach(item=>item());
    }
};
let man=new Man();
function buyCar() {
    console.log('buycar')
}
function buyPack() {
    console.log('buypack')
}
man.on('有钱',buyCar);//{'有钱':[buyCar]}
man.on('有钱',buyPack);//{'有钱':[buyCar,buyPack]}

man.emit('有钱');//[buyCar(),buyPack()]