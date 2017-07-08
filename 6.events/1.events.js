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
        //apply传递的是数组call 传递的是一个个的 {'有钱':[one]}
        this._event[eventName].forEach(item=>item.call(this,...args));
    }
};
Man.prototype.once=function (eventName, callback) {//先绑定 触发emit时  删除绑定的
    function one() { //触发one函数 调用原有执行的函数
        callback.apply(arguments);//buyPack
        this.removeListener(eventName,callback)  //执行后删除one函数
    }
    this.on(eventName,one);//绑定的是one函数
    one.l=callback;//在one上储存买包的事
};
Man.prototype.removeListener=function (evevtName, callback) {
    let arr=this._event[eventName];
  if(arr){
      //返回true 表示放到新数组里，返回false表示不要他了，要改变的是对象中的数组，不是新声明的数组
      this._event[eventName]=arr.filter(cb=>{
          return cb!==callback && cb.l!==callback;//可能cb是one函数 如果自定义属性和当前传递的callback相同 表示也要删掉
      })
  }
};





let man=new Man();
function buyCar(who,who1) {
    console.log('buycarfor'+who+who1)
}
function buyPack(who,who1) {
    console.log('buypackfor'+who+who1)
}
man.on('有钱',buyCar);//{'有钱':[buyCar]}

man.once('有钱',buyPack);//{'有钱':[buyCar,buyPack]}  once的作用是 只触发一次，多次触发也只是一次

man.on('有钱',buyPack);//{'有钱':[buyCar,buyPack]}

man.removeListener('有钱',buyCar);

man.emit('有钱','妹子','妹子2');//[buyCar(),buyPack()]