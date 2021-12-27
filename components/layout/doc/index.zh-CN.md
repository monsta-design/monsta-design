---
category: Components
subtitle: 布局
type: 布局
title: Layout
cover: https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg
---

布局组件及相关的辅助指令。

## 模块引入

```ts
import { NSLayoutModule } from 'monsta-design/layout';
```

## 尺寸指令

* Width、Height、Gutter、Gap、Offset、Margin、Padding

## 显示类型

* block
* flex(grid) => row、col、gutter
* grid => gap 

## 对齐方式

## API

## 指令

| 指令 | 说明 
| --- | --- |
`row` | 用于 grid 布局
`col` | 用于 grid 布局
`flex` | 显示为 flex 盒子
`inline_flex` | 显示为 flex 盒子

### ns-row

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
| --- | --- | --- | --- | --- |
| `[nzOffsetBottom]` | 距离窗口底部达到指定偏移量后触发 | `number` | - | ✅ |
| `[nzOffsetTop]` | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` | ✅ |
| `[nzTarget]` | 设置 `nz-affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `string \| HTMLElement` | `window` |
| `(nzChange)` | 固定状态改变时触发的回调函数 | `EventEmitter<boolean>` | - |


### ns-col

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
| --- | --- | --- | --- | --- |
| `[nzOffsetBottom]` | 距离窗口底部达到指定偏移量后触发 | `number` | - | ✅ |
| `[nzOffsetTop]` | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` | ✅ |
| `[nzTarget]` | 设置 `nz-affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `string \| HTMLElement` | `window` |
| `(nzChange)` | 固定状态改变时触发的回调函数 | `EventEmitter<boolean>` | - |
