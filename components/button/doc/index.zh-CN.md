---
category: Components
subtitle: 按钮
type: 通用
title: Button
cover: https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg
---

用来呈现按钮操作

## 何时使用

需要展示按钮的时候

```ts
import { NSButtonModule } from 'monsta-design/button';
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
