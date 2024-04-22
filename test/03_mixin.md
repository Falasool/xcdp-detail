实现 mixin (target, source) 方法，把 source 的属性复制到 target 上，在代码复用方面，mixin 和继承的共同点是哪些，有哪些优缺点？

```js
function mixin(target, source){
	if(target && source){
	  for(let key in source){
	    // 
	    if(target.prototype.hasOwnProperty(key)){
	      throw new Error("No Permit to Override")
	    }
	    // key
		target.prototype.[key] = source.prototype.[key] 
	  }
	}
}
```

- 相同点
	- 都提高代码的复用性和可维护性，符合组件化的思想
- 不同点
	- 继承会提高维护的复杂度，如果有多个实例继承同一个父类，修改父类可能会影响到所有实例，所以适合共享属性/方法的情况
	- Mixin 只复制属性，依赖关系比较简单清晰，适合把多个功能组合到新对象中