---
category: Components
subtitle: 动态大小
type: 布局
title: Resize
cover: https://gw.alipayobjects.com/zos/alicdn/tX6-md4H6/Affix.svg
---

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

```ts
import { NSResizableModule } from 'monsta-design/resizable';
```

## API

 
### [nsResizable]

| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| `[nsResizableHandles]` | 设置拖动句柄 | `s,e,t,b,ts,te,bs,be,string` | `e,b,be`  |

s,e,t,b 符合 Bootstrap 的布局方向定义，分布代表开始位置，结束位置，上，下。
 

