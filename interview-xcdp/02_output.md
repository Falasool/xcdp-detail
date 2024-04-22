输出是否为 true 或修改为 true

```js
function SnapPea(name) {
	this.name = name
}
 
var tick = new SnapPea('tick')
var tock = SnapPea('tock')
// var tock = setPrototypeOf(SnapPea('tock'), SnapPea.prototype)  
console.log(tick instanceof SnapPea && tock instanceof SnapPea) //false
console.log(tock) // undefined
```

解释：

输出为 false，instanceof 的原理：利用原型链判断实例和 constructor 之间的关系，由于 `tick.__proto__ = SnapPea.prototype` 这一项为 true，tock 没有使用 new 关键字，是普通的函数调用，返回 undefined

修改：

```diff
- var tock = SnapPea('tock')
+ var tock = new SnapPea('tock')
```