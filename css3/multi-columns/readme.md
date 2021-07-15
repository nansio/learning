# CSS3多列

将文本内容设计成报纸一样的多列布局。

### 相关属性

- columns： count与width的缩写
- column-count：指定元素被分隔的列数
- column-width：指定列的宽度
- column-gap：指定列与列之间的间隙
- column-span：指定元素要横跨过少个列，只有all一个值
- column-rule：所有column-rule-*的简写
- column-rule-style：两列间边框样式
- column-rule-width：两列间边框厚度
- column-rule-color：两列间边框颜色
- column-fill：指定列如何填充，可选值`balance`与`auto`

### 示例

```css
div{
  columns: 100px 3;
  column-gap: 15px;
  column-rule: 2px dotted gray;
}

h1{
  column-span: all;
}
```

**[demo](./demo.html)** here...