# 概念

弹性容器 Flex container 与 弹性子元素 Flex item

## Flex container

- flex-direction: row | row-reverse | column | column-reverse
- flex-wrap: nowrap | wrap | wrap-reverse | initial | inherit
- flex-flow: row nowrap
- justify-content
子项在主轴上的对齐方式
可选值如下： 
flex-start | flex-end | center | space-between | space-around
- align-items
子项在纵轴上的对齐方式
可选值如下：
flex-start  |  flex-end  |  center  |  baseline  |  stretch
- align-content
设置多行情况下，多行内容相对于Flex container的对齐方式
可选值如下（默认stretch）：
flex-start  |  flex-end  |  center  |  space-between  |  space-around  |  stretch

## Flex item

- order: 整型数字表示元素排序位置
- margin: auto时可自动获取容器剩余空间
```css
.flex-item{
  width: 75px; height:75px;
  margin: 10px;
}
.flex-item:first-child{
  margin-right: auto;
}
```
上述样式描述的第一个<code>.flex-item</code>将占据水平方向剩余的空间
> 因此，可通过设置单个flex-item的margin为auto实现完美居中。
- align-self
设置子元素在纵轴上的对齐方式
可选值：
auto | flex-start | flex-end | center | baseline | stretch
- flex
用于设置子元素如何分配空间
可选值：
auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]