 实现函数并优化

```js
<div id="block"></div>
<script>
var el = document.getElementById('block')
el.style.transition = 'all 0.5s'
el.style.width = '100px'
el.style.height = '100px'
el.style.display = 'none'  
function fadeIn(el) {
// 使el伴随透明度0-1的动画效果显示出来
}
function slide(el) {
	// 存在什么性能问题，怎么优化
	var open = true
	setInterval(() => {
		el.style.marginLeft = open ? '200px' : '0px'
		open = !open
	}, 2000)
}
fadeIn(el)
slide(el)
</script>
```

实现 fadeIn：

```js
function fadeIn(el) {
	// init
	el.style.display = 'block'
	el.style.opacity = '0'
	let opacity = 0  
	function increaseOpacity() {
		opacity += 0.05
		el.style.opacity = opacity.toString()
		if (opacity < 1) {
			requestAnimationFrame(increaseOpacity) // recur
		}
	}
	// 1st
	requestAnimationFrame(increaseOpacity)
}
```

性能问题：没有「slide」，产生闭包导致对象没有被回收，直接操作 DOM 出现 repaint 消耗资源；没有进行 clearInterval。用 `requestAnimationFrame` 重写

```js
function slide(el) {
	//左右循环滑动
	// init mudi 目前 方向
	let terminalPoint = 200
	let currentPoint = 0
	let direction = 1  
	function slideLoop() {
		const speed = 5 // 滑动速度
		currentPoint += speed * direction
		el.style.marginLeft = `${currentPoint}px`  
		// 当接近目标点时反转方向
		if (direction === 1 && currentPoint >= terminalPoint) {
			direction *= -1
			terminalPoint = direction === 1 ? 200 : 0
		}  
		requestAnimationFrame(animateSlide) //recur
	}
	 
	requestAnimationFrame(animateSlide)
}
```