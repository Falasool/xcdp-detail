实现 debounce (fn, wait) 方法，仅在 debounce 最后一次 被调用后并等待 wait 毫秒后，fn 才被执行

```js
function debounce(fn, wait) {
	//init timer
	let timer = null
	return function (...args) {
		if (timer) {
			const that = this
			// 清除计时器
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn.apply(that, args)
		}, wait)
	}
}

// usage
const submitItem = debounce(() => {
	console.log('submit success')
}, 3000)
```