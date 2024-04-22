```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>imgContainer</title>
    <style>
      .container {
        width: 500px;
        height: 500px;
        border: 1px dotted #aaa;
        overflow: hidden;

        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;

        object-fit: contain;
      }
    </style>
  </head>
  <!-- 
    图片能等比完整显示
    水平垂直居中
   -->
  <body>
    <div class="container">
      <img src="http://img.wandoujia.com/anything.png" alt="">
      <!-- <img src="https://picsum.photos/200/300" alt="" /> -->
      <!-- <img src="https://picsum.photos/200/500" alt="" /> -->
    </div>
  </body>
</html>

```

sections colors

文字：white、轻、主色、中 最重 透明

标签：活动-正常、活动-描边

中性色：分割线 图标 底色

品牌：normal 按钮渐变

标签：易解冻/正常 清真/正常 新品/正常 清真/填充 新品/填充 新品/描边 易解冻/填充 易解冻/描边 品牌/描边 清真/描边

https://github.com/cloudinsight/bootcamp/blob/master/FED.md

https://12factor.net/zh_cn/

花半天时间，轻松打造前端CI/CD工作流

https://juejin.cn/post/6944878021560139783

