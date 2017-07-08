## 继承
1.全部继承
```
Child.prototype=new parent

extends + super

```
2.只继承私有
```
function Child(){
    parent.call(this)
}

```
3.只继承公有
```
child.prototype.__proto__=parent.prototype
child.prototype=Object.create(Parent.proto)
Object.setProtoTypeOf(Child.prototype,Parent.prototype)

```