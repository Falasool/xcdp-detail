![image-20240420163030231](https://cdn.jsdelivr.net/gh/Falasool/blog-pic-bed@main/blog202404191630578.png)

事件监听器只执行一次（listenOne已经被添加到document上）

```
click 1
click 2
```

![image-20240420163147870](https://cdn.jsdelivr.net/gh/Falasool/blog-pic-bed@main/blog202404191631338.png)

- 用户点击 body，触发 ListenA，打印 1 次，

- 然后移除 listenB、listenC，因为listenC也绑定在body上，此时已经在执行队列里，打印 2 次
- 事件冒泡到 document，listenB 已经被移除了

```
click A
click C
```

- 用户继续点，只打印 listenA

![image-20240420165307342](https://cdn.jsdelivr.net/gh/Falasool/blog-pic-bed@main/blog202404191653365.png)

document 上捕获阶段触发

body 上捕获阶段触发，阻止冒泡

body 上冒泡触发

document 上冒泡触发

```
click 1
click 2
```

