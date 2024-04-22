// @ts-nocheck

// Sticky Nav
// IntersectionObserver 接口观察目标元素与视口viewpoint的交叉状态（用户能看到/看不到）
// new IntersectionObserver(callback[, options])

const sectionHeroEl = document.querySelector('.banner')

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    console.log(ent)
    // 如果 目标元素与视口的交叉区域为false（不存在）
    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // root制定目标元素所在的容器节点, null = viewpoint
    root: null,
    // 决定什么时候触发回调函数：可见部分为0
    threshold: 0,
    // 改变root的margin值，影响交叉区域的检测大小，margin-top为负 && 向上滚动 == 提前触发
    rootMargin: '-80px',
  }
)
/* ********************************************* */

// tab toggle
// init
const lis = document.querySelector('.tab-nav').querySelectorAll('li')
const items = document.querySelectorAll('.recommend-carousel')
// 元素获取完成之后利用for循环为每个li标签绑定事件
for (let i = 0; i < lis.length; i++) {
  // 为每个li标签添加自定义属性index
  lis[i].setAttribute('index', i)
  lis[i].onclick = function () {
    // 所有标签的类均设置为空
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = ''
    }
    // 将自己标签的类设置成红背景，白字体
    this.className = 'current'
    // 获取当前li的index属性。
    var index = this.getAttribute('index')
    for (let i = 0; i < lis.length; i++) {
      // 将所有li标签对应的内容均设置为不可见
      items[i].style.display = 'none'
    }
    // 将当前li标签对应的内容设置为可见
    items[index].style.display = 'block'
  }
}

/* ********************************************* */

// back to top

function backToTop() {
  // document.documentElement.scrollIntoView({
  //   behavior: 'smooth',
  // })
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

window.onload = function () {
  let scrollTop =
    this.document.documentElement.scrollTop || this.document.body.scrollTop
  let totopBtn = this.document.getElementById('back-to-top')
  if (scrollTop > 0) {
    totopBtn.style.display = 'block'
  } else {
    totopBtn.style.display = 'none'
  }
}

window.onscroll = function () {
  let scrollTop =
    this.document.documentElement.scrollTop || this.document.body.scrollTop
  let totopBtn = this.document.getElementById('back-to-top')
  if (scrollTop < 375) {
    totopBtn.style.display = 'none'
  } else {
    totopBtn.style.display = 'block'
    totopBtn.addEventListener('click', backToTop, false)
  }
}
