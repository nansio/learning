# 多媒体查询语法

```css
@media not|only mediatype and (expressions) {
  // css code here...
}
```

<code>not|only</code>是可选的,在未设置的情况下，样式会适应在所有设备上显示效果。

可以通过设置<code>link</code>标签的<code>media</code>属性为不同媒体使用不同样式文件。

```html
<link rel="stylesheet" media="screen and (max-width:480px)" href="sm.css">
```

### CSS3多媒体类型的选值

|值|描述|
|:----|:----:|
|all|所有多媒体类型设备|
|screen|电脑屏幕、平板、手机等|
|speech|屏幕阅读器|
|print|打印机|

### 简单示例

```css
@media screen and (max-width: 480px) {
  body{
    background-color: lightgreen;
  }
}

@media screen and (min-width: 480px) and (max-width: 768px) {
  body{
    background-color: lightgreen;
  }
}
```