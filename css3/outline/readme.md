# outline

outline 是绘制于元素周围的一条线，在 `border`外面，用于突出元素

### 语法格式

```css
outline: outline-color outline-style outline-width
/* 示例 */
outline: red dashed thick
```

**注意：** `outline`是不占用空间的，不会增加额外的`height`或`width`

### outline-offset

设置与`border`的偏移来绘制边框，是CSS3的新属性

```css
div{
  border: 2px solid black;
  outline: 3px dashed red;
  outline-offset: 5px;
}
```

*`outline`的示例点[这里](./demo.html)*