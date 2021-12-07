---
category: Components
subtitle: 间隔
type: 布局
title: Space
cover: https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg
---

布局组件及相关的辅助指令。

## 何时使用

用来快速进行响应式布局。

```ts
import { NSLayoutModule } from 'monsta-design/layout';
```

## API


### nz-affix

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
| --- | --- | --- | --- | --- |
| `[nzOffsetBottom]` | 距离窗口底部达到指定偏移量后触发 | `number` | - | ✅ |
| `[nzOffsetTop]` | 距离窗口顶部达到指定偏移量后触发 | `number` | `0` | ✅ |
| `[nzTarget]` | 设置 `nz-affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | `string \| HTMLElement` | `window` |
| `(nzChange)` | 固定状态改变时触发的回调函数 | `EventEmitter<boolean>` | - |

**注意：**`nz-affix` 内的元素不要使用绝对定位，如需要绝对定位的效果，可以直接设置 `nz-affix` 为绝对定位：

```jsx
<nz-affix style="position: absolute; top: 10px, left: 10px">
  ...
</nz-affix>
```
