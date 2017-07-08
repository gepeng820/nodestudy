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


//声明式 forEach forIn
let arr=[1,2,3];
for(let item of arr){//非声明式
    console.log(item);//可以break
}


//forEach forIn for of 的区别 钩子函数
let arr=[...[1,2,3],...[4,5,6]];//[1,2,3,4,5,6,]   es6语法

/*let obj={name:1};
let obj2={age:2};
let obj3={...obj,...obj2};  //extend  es7语法  node不支持*/

Man.prototype.emit=function (eventName,...args) {//除了第一个将剩下的部分组成数组
    //在参数中是剩余运算符 还可以用作展开运算  [...[1,2,3],...[4,5,6]]

    if(this._event[eventName]){
        //apply传递的是数组call 传递的是一个个的
        this._event[eventName].forEach(item=>item.call(this,...args));
    }
};
let man=new Man();
function buyCar(who,who1) {
    console.log('buycarfor'+who)
}
function buyPack(who,who1) {
    console.log('buypackfor'+who)
}
man.on('有钱',buyCar);//{'有钱':[buyCar]}
man.on('有钱',buyPack);//{'有钱':[buyCar,buyPack]}

man.emit('有钱','妹子');//[buyCar(),buyPack()]