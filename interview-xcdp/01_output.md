输出

```js
var a = true
function whatever() {
	console.log('function',a) //undefined，不执行if
	if (a) {
		var a = true // function 作用域里定义的变量 a
		console.log(a)
	}
	a = false
}  

whatever()
console.log(a) // true，打印window.a
```

解释：funciton 里定义的 `var a` 因为声明提升到 function 作用域顶部，赋值还待在原地，形成了一个暂时性死区，if 语句不执行