### CSS设计模式

#### 1. BEM(Block,Element,Modifier)
```css
.header{
  block style
}
.header__title{
  element style
}
.header--hover{
  modifier style
}
```
**BEM优点**
- 块之间优先级相对扁平
- 合理命名便于解读查找
- 块下元素结构与状态清晰
- 便于拓展与维护
- 不用担心命名冲突问题

#### 2. OOCSS(Object Oriented CSS)
面向对象CSS：更像是一种约定规范
```html
<ul class="nav">
  <li>
    <a href="#">Home</a>
  </li>
</ul>
```

相比于`ul.nav>li>a`这种依赖DOM结构的逐级书写，OOCSS更推荐`ul.nav a`或者给a标签添加class后`ul.nav a.nav-item`这种写法

```css
.btn{
  width:100px;
  height:100px;
  background-color:#999;
  &.btn-primary{
    background-color: yellow;
  }
}
```

**OOCSS优点**
- 与DOM结构解耦，减少依赖
- 提倡类名抽象，复用性高
- 代码量少，缩减文件大小

### 3. SMACSS
SMACSS是Jonathan Snook的一个CSS框架，在SMACSS网站上，他表示，它更像是一个风格指南
规则分为五类
- Base：用于默认值，如html,body,a,a:hover
- Layout：将页面分为header,footer,content等部分
- Module：模块化元件，SMACSS文档将模块视为你的大多数元素
- State：每个元素的可能状态,如active,not-active,hidden,expanded
- Theme：定义了模块和布局的变体

### 4. Atomic Design
原子设计
是创建设计系统的系统方法，分为5个层次
- 原子Atoms
- 分子Molecules
- 组织Organisms
- 模版Templates
- 页面Pages

常用：BEM+OOCSS