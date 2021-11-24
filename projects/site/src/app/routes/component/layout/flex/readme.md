# Flex 布局

这里随便介绍一点 Flex 布局。  

这里尾部一定要有一点空格和换行。

## 重点概念

1. 主轴 main axis
2. 交叉轴 cross axis
3. 起始位置 main start、cross start
4. 结束位置 main end、cross end
5. 容器 flex container
6. 元素 flex item 
7. 元素的主轴方向尺寸 main size
8. 元素的交叉轴方向尺寸 cross size

![](/assets/img/flex1.png)


## 主轴方向 flex-direction

`flex-direction` 决定元素在容器中的排列方式

属性值 | 作用
:---|:---
row | 默认值，按从左到右顺序水平显示
row-reverse | 按从右到做左顺序显示水平显示
column | 将元素从上到下顺序垂直显示
column-reverse | 将元素从下到上垂直显示

## 元素换行 flex-wrap

定义子元素是否在容器中换行或换列

属性值 | 作用
:---|:---
nowrap | 默认值，不换行不换列
wrap | 换行或换列
wrap-reverse | 以相反顺序换行或换列


## 主轴方向对齐方式 justify-content

属性值 | 作用
:---|:---
flex-start | 默认值，从左往右依次排列
flex-end | 从右到左依次排列
center | 居中显示
space-between | 平均分配到该行上，两边不留空间
space-around | 平均分布在该行上，两边留一半间隔空间

## 交叉轴方向对齐方式 align-items

多行内容按行处理

属性值 | 作用
:---|:---
flex-start | 从交叉轴起点开始
flex-end | 从交叉轴轴终点开始
center | 居中显示

## 交叉轴方向对齐方式 align-content
多行内容按整体处理

属性值 | 作用
:---|:---
flex-start | 位于交叉轴起始位置
flex-end | 位于交叉轴结束位置
center | 位于交叉轴中心
space-between | 中间有留白
space-around | 两端都有留白

## 伸缩比例 flex、flex-basis、flex-grow、flex-shrink

属性值 | 作用
:---|:---
flex-basis | 设置元素伸缩基准值，设置时 width 将失效
flex-grow | 设置元素的扩展比率
flex-shrink | 设置元素的缩小比率
flex | flex-grow、flex-shrink、flex-basis 的缩写

## 伸缩比例的特殊写法

属性值 | 作用
:---|:---
`flex:auto` | `flex: 1 1 auto`
`flex:none` | `flex: 0 0 auto`
`flex: 0%` | `flex: 1 1 0%`
`flex: 100px` | `flex: 1 1 100px`
`flex: 1` | `flex: 1 1 0%`








