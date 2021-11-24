---
id: doc-markdown
title: Markdown Features
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
- docs
- docusaurus
  image: https://i.imgur.com/mErPwqL.png
---

# 表单

具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。

该组件需要与 Angular表单 结合使用，开发者根据需要可以自由选择 响应式表单 或 模板驱动表单.

> 使用该组件前请确保您已经阅读并掌握了 Forms 的使用方式。

## 表单

我们提供了以下三种排列方式：

* 水平排列：标签和表单控件水平排列；（默认）
* 垂直排列：标签和表单控件上下垂直排列；
* 行内排列：表单项水平行内排列。

### 表单项 ns-form-item

表单项用于区分表单中不同的区域，包含表单域和表单标签(可选)。

### 表单标签 ns-form-label

用于标示当前表单项的内容，可选。

### 表单域 ns-form-control

表单一定会包含表单域，表单域可以是输入控件，标准表单域，标签，下拉菜单，文本域等。

```html

<form nz-form>
  <nz-form-item>
    <nz-form-label [nzSpan]="6" nzFor="email">E-mail</nz-form-label>
    <nz-form-control [nzSpan]="14">
      <input nz-input name="email" type="email" id="email">
    </nz-form-control>
  </nz-form-item>
</form>
```

```ts
import {NsFormModule} from 'monsta-design/form';
```

## API 

### [ns-from] 


参数 | 说明 | 类型 | 默认值 | 全局配置
:---|---|---|---|---
[nzLayout]	| 表单布局 | 	'horizontal' | 'vertical' | 'inline'|	'horizontal' |
[nzAutoTips]	| 配置 nz-form-control 的 [nzAutoTips] 的默认值, 具体用法请参考示例：自动提示 |	Record<string, Record<string, string>> |	{} |	✅


