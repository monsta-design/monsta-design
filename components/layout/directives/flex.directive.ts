import {Directive, HostBinding, Input} from '@angular/core';
import {
  FlexAlignMode,
  FlexAlignSelfMode,
  FlexDirectionMode,
  FlexGrow,
  FlexJustifyMode,
  FlexShark,
  FlexWrapMode
} from '../../types';


interface FlexAttributes {
  inline: boolean,
  media: string,
  direction: FlexDirectionMode,
  justify_content: FlexJustifyMode,
  align_items: FlexAlignMode,
  align_content: FlexAlignMode,
  wrap: FlexWrapMode,
}

interface FlexItemAttributes {
  media: string,
  fill: boolean,
  grow: FlexGrow,
  shrink: FlexShark,
  order: number | string,
  align_self: FlexAlignSelfMode,
  mt_auto: boolean,
  mb_auto: boolean,
  ms_auto: boolean,
  me_auto: boolean,
}

function calcFlexClasses(attributes: FlexAttributes): string {

  attributes.media = attributes.media !== null ? '-' + attributes.media : ''

  let classes = [
    `bs-d${attributes.media}${attributes.inline ? '-inline' : ''}-flex`,
  ]
  if (attributes.direction !== null) {
    classes.push(`bs-flex${attributes.media}-` + attributes.direction)
  }
  if (attributes.justify_content !== null) {
    classes.push(`bs-justify-content${attributes.media}-` + attributes.justify_content)
  }
  if (attributes.align_items !== null) {
    classes.push(`bs-align-items${attributes.media}-` + attributes.align_items)
  }
  if (attributes.align_content !== null) {
    classes.push(`bs-align-content${attributes.media}-` + attributes.align_content)
  }
  if (attributes.wrap !== null) {
    classes.push(`bs-flex${attributes.media}-` + attributes.wrap)
  }

  return classes.join(' ')
}

function calcFlexItemClasses(attributes: FlexItemAttributes): string {

  attributes.media = attributes.media !== null ? '-' + attributes.media : ''

  let classes = []
  if (attributes.fill) {
    classes.push(`bs-flex${attributes.media}-fill`)
  }
  if (attributes.grow !== null) {
    classes.push(`bs-flex${attributes.media}-grow-` + attributes.grow)
  }
  if (attributes.shrink !== null) {
    classes.push(`bs-flex${attributes.media}-shrink-` + attributes.shrink)
  }
  if (attributes.order !== null) {
    classes.push(`bs-order${attributes.media}-` + attributes.order)
  }
  if (attributes.align_self !== null) {
    classes.push(`bs-align-self${attributes.media}-` + attributes.align_self)
  }
  if (attributes.mt_auto) {
    classes.push(`bs-mt${attributes.media}-auto`)
  }
  if (attributes.mb_auto) {
    classes.push(`bs-mb${attributes.media}-auto`)
  }
  if (attributes.ms_auto) {
    classes.push(`bs-ms${attributes.media}-auto`)
  }
  if (attributes.me_auto) {
    classes.push(`bs-me${attributes.media}-auto`)
  }
  return classes.join(' ')
}

@Directive({
  selector: '[flex]',
})
export class FlexDirective {
  @Input() flex_direction: FlexDirectionMode = null;
  @Input() flex_justify_content: FlexJustifyMode = null;
  @Input() flex_align_items: FlexAlignMode = null;
  @Input() flex_align_content: FlexAlignMode = null;
  @Input() flex_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: null,
      direction: this.flex_direction,
      justify_content: this.flex_justify_content,
      align_items: this.flex_align_items,
      align_content: this.flex_align_content,
      wrap: this.flex_wrap,
    })
  }
}

@Directive({
  selector: '[flex_sm]',
})
export class FlexSmDirective {
  @Input() flex_sm_direction: FlexDirectionMode = null;
  @Input() flex_sm_justify_content: FlexJustifyMode = null;
  @Input() flex_sm_align_items: FlexAlignMode = null;
  @Input() flex_sm_align_content: FlexAlignMode = null;
  @Input() flex_sm_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: 'sm',
      direction: this.flex_sm_direction,
      justify_content: this.flex_sm_justify_content,
      align_items: this.flex_sm_align_items,
      align_content: this.flex_sm_align_content,
      wrap: this.flex_sm_wrap,
    })
  }
}

@Directive({
  selector: '[flex_md]',
})
export class FlexMdDirective {
  @Input() flex_md_direction: FlexDirectionMode = null;
  @Input() flex_md_justify_content: FlexJustifyMode = null;
  @Input() flex_md_align_items: FlexAlignMode = null;
  @Input() flex_md_align_content: FlexAlignMode = null;
  @Input() flex_md_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: 'md',
      direction: this.flex_md_direction,
      justify_content: this.flex_md_justify_content,
      align_items: this.flex_md_align_items,
      align_content: this.flex_md_align_content,
      wrap: this.flex_md_wrap,
    })
  }
}

@Directive({
  selector: '[flex_lg]',
})
export class FlexLgDirective {
  @Input() flex_lg_direction: FlexDirectionMode = null;
  @Input() flex_lg_justify_content: FlexJustifyMode = null;
  @Input() flex_lg_align_items: FlexAlignMode = null;
  @Input() flex_lg_align_content: FlexAlignMode = null;
  @Input() flex_lg_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: 'lg',
      direction: this.flex_lg_direction,
      justify_content: this.flex_lg_justify_content,
      align_items: this.flex_lg_align_items,
      align_content: this.flex_lg_align_content,
      wrap: this.flex_lg_wrap,
    })
  }
}

@Directive({
  selector: '[flex_xl]',
})
export class FlexXlDirective {
  @Input() flex_xl_direction: FlexDirectionMode = null;
  @Input() flex_xl_justify_content: FlexJustifyMode = null;
  @Input() flex_xl_align_items: FlexAlignMode = null;
  @Input() flex_xl_align_content: FlexAlignMode = null;
  @Input() flex_xl_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: 'xl',
      direction: this.flex_xl_direction,
      justify_content: this.flex_xl_justify_content,
      align_items: this.flex_xl_align_items,
      align_content: this.flex_xl_align_content,
      wrap: this.flex_xl_wrap,
    })
  }
}

@Directive({
  selector: '[flex_xxl]',
})
export class FlexXxlDirective {
  @Input() flex_xxl_direction: FlexDirectionMode = null;
  @Input() flex_xxl_justify_content: FlexJustifyMode = null;
  @Input() flex_xxl_align_items: FlexAlignMode = null;
  @Input() flex_xxl_align_content: FlexAlignMode = null;
  @Input() flex_xxl_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      media: 'xxl',
      direction: this.flex_xxl_direction,
      justify_content: this.flex_xxl_justify_content,
      align_items: this.flex_xxl_align_items,
      align_content: this.flex_xxl_align_content,
      wrap: this.flex_xxl_wrap,
    })
  }
}

@Directive({
  selector: '[inlineflex]',
})
export class InlineFlexDirective {
  @Input() flex_inline_direction: FlexDirectionMode = null;
  @Input() flex_inline_justify_content: FlexJustifyMode = null;
  @Input() flex_inline_align_items: FlexAlignMode = null;
  @Input() flex_inline_align_content: FlexAlignMode = null;
  @Input() flex_inline_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: null,
      direction: this.flex_inline_direction,
      justify_content: this.flex_inline_justify_content,
      align_items: this.flex_inline_align_items,
      align_content: this.flex_inline_align_content,
      wrap: this.flex_inline_wrap,
    })
  }
}

@Directive({
  selector: '[_inlineflex_sm]',
})
export class InlineFlexSmDirective {
  @Input() _inlineflex_sm_direction: FlexDirectionMode = null;
  @Input() _inlineflex_sm_justify_content: FlexJustifyMode = null;
  @Input() _inlineflex_sm_align_items: FlexAlignMode = null;
  @Input() _inlineflex_sm_align_content: FlexAlignMode = null;
  @Input() _inlineflex_sm_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: 'sm',
      direction: this._inlineflex_sm_direction,
      justify_content: this._inlineflex_sm_justify_content,
      align_items: this._inlineflex_sm_align_items,
      align_content: this._inlineflex_sm_align_content,
      wrap: this._inlineflex_sm_wrap,
    })
  }
}

@Directive({
  selector: '[_inlineflex_md]',
})
export class InlineFlexMdDirective {
  @Input() _inlineflex_md_direction: FlexDirectionMode = null;
  @Input() _inlineflex_md_justify_content: FlexJustifyMode = null;
  @Input() _inlineflex_md_align_items: FlexAlignMode = null;
  @Input() _inlineflex_md_align_content: FlexAlignMode = null;
  @Input() _inlineflex_md_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: 'md',
      direction: this._inlineflex_md_direction,
      justify_content: this._inlineflex_md_justify_content,
      align_items: this._inlineflex_md_align_items,
      align_content: this._inlineflex_md_align_content,
      wrap: this._inlineflex_md_wrap,
    })
  }
}

@Directive({
  selector: '[_inlineflex_lg]',
})
export class InlineFlexLgDirective {
  @Input() _inlineflex_lg_direction: FlexDirectionMode = null;
  @Input() _inlineflex_lg_justify_content: FlexJustifyMode = null;
  @Input() _inlineflex_lg_align_items: FlexAlignMode = null;
  @Input() _inlineflex_lg_align_content: FlexAlignMode = null;
  @Input() _inlineflex_lg_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: 'lg',
      direction: this._inlineflex_lg_direction,
      justify_content: this._inlineflex_lg_justify_content,
      align_items: this._inlineflex_lg_align_items,
      align_content: this._inlineflex_lg_align_content,
      wrap: this._inlineflex_lg_wrap,
    })
  }
}

@Directive({
  selector: '[_inlineflex_xl]',
})
export class InlineFlexXlDirective {
  @Input() _inlineflex_xl_direction: FlexDirectionMode = null;
  @Input() _inlineflex_xl_justify_content: FlexJustifyMode = null;
  @Input() _inlineflex_xl_align_items: FlexAlignMode = null;
  @Input() _inlineflex_xl_align_content: FlexAlignMode = null;
  @Input() _inlineflex_xl_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: 'xl',
      direction: this._inlineflex_xl_direction,
      justify_content: this._inlineflex_xl_justify_content,
      align_items: this._inlineflex_xl_align_items,
      align_content: this._inlineflex_xl_align_content,
      wrap: this._inlineflex_xl_wrap,
    })
  }
}

@Directive({
  selector: '[_inlineflex_xxl]',
})
export class InlineFlexXxlDirective {
  @Input() _inlineflex_xxl_direction: FlexDirectionMode = null;
  @Input() _inlineflex_xxl_justify_content: FlexJustifyMode = null;
  @Input() _inlineflex_xxl_align_items: FlexAlignMode = null;
  @Input() _inlineflex_xxl_align_content: FlexAlignMode = null;
  @Input() _inlineflex_xxl_wrap: FlexWrapMode = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      media: 'xxl',
      direction: this._inlineflex_xxl_direction,
      justify_content: this._inlineflex_xxl_justify_content,
      align_items: this._inlineflex_xxl_align_items,
      align_content: this._inlineflex_xxl_align_content,
      wrap: this._inlineflex_xxl_wrap,
    })
  }
}

@Directive({
  selector: '[flex_item]',
})
export class FlexItemDirective {
  @Input() flex_item_fill: boolean = false;
  @Input() flex_item_grow: FlexGrow = null;
  @Input() flex_item_shrink: FlexShark = null;
  @Input() flex_item_order: number | string = null;
  @Input() flex_item_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_mt_auto: boolean;
  @Input() flex_item_mb_auto: boolean;
  @Input() flex_item_ms_auto: boolean;
  @Input() flex_item_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'md',
      fill: this.flex_item_fill,
      grow: this.flex_item_grow,
      shrink: this.flex_item_shrink,
      order: this.flex_item_order,
      align_self: this.flex_item_align_self,
      mt_auto: this.flex_item_mt_auto,
      mb_auto: this.flex_item_mb_auto,
      ms_auto: this.flex_item_ms_auto,
      me_auto: this.flex_item_me_auto,
    })
  }
}

@Directive({
  selector: '[flex_item_sm]',
})
export class FlexItemSmDirective {
  @Input() flex_item_sm_fill: boolean = false;
  @Input() flex_item_sm_grow: FlexGrow = null;
  @Input() flex_item_sm_shrink: FlexShark = null;
  @Input() flex_item_sm_order: number | string = null;
  @Input() flex_item_sm_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_sm_mt_auto: boolean;
  @Input() flex_item_sm_mb_auto: boolean;
  @Input() flex_item_sm_ms_auto: boolean;
  @Input() flex_item_sm_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'sm',
      fill: this.flex_item_sm_fill,
      grow: this.flex_item_sm_grow,
      shrink: this.flex_item_sm_shrink,
      order: this.flex_item_sm_order,
      align_self: this.flex_item_sm_align_self,
      mt_auto: this.flex_item_sm_mt_auto,
      mb_auto: this.flex_item_sm_mb_auto,
      ms_auto: this.flex_item_sm_ms_auto,
      me_auto: this.flex_item_sm_me_auto,
    })
  }
}

@Directive({
  selector: '[flex_item_md]',
})
export class FlexItemMdDirective {
  @Input() flex_item_md_fill: boolean = false;
  @Input() flex_item_md_grow: FlexGrow = null;
  @Input() flex_item_md_shrink: FlexShark = null;
  @Input() flex_item_md_order: number | string = null;
  @Input() flex_item_md_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_md_mt_auto: boolean;
  @Input() flex_item_md_mb_auto: boolean;
  @Input() flex_item_md_ms_auto: boolean;
  @Input() flex_item_md_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'md',
      fill: this.flex_item_md_fill,
      grow: this.flex_item_md_grow,
      shrink: this.flex_item_md_shrink,
      order: this.flex_item_md_order,
      align_self: this.flex_item_md_align_self,
      mt_auto: this.flex_item_md_mt_auto,
      mb_auto: this.flex_item_md_mb_auto,
      ms_auto: this.flex_item_md_ms_auto,
      me_auto: this.flex_item_md_me_auto,
    })
  }
}

@Directive({
  selector: '[flex_item_lg]',
})
export class FlexItemLgDirective {
  @Input() flex_item_lg_fill: boolean = false;
  @Input() flex_item_lg_grow: FlexGrow = null;
  @Input() flex_item_lg_shrink: FlexShark = null;
  @Input() flex_item_lg_order: number | string = null;
  @Input() flex_item_lg_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_lg_mt_auto: boolean;
  @Input() flex_item_lg_mb_auto: boolean;
  @Input() flex_item_lg_ms_auto: boolean;
  @Input() flex_item_lg_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'lg',
      fill: this.flex_item_lg_fill,
      grow: this.flex_item_lg_grow,
      shrink: this.flex_item_lg_shrink,
      order: this.flex_item_lg_order,
      align_self: this.flex_item_lg_align_self,
      mt_auto: this.flex_item_lg_mt_auto,
      mb_auto: this.flex_item_lg_mb_auto,
      ms_auto: this.flex_item_lg_ms_auto,
      me_auto: this.flex_item_lg_me_auto,
    })
  }
}

@Directive({
  selector: '[flex_item_xl]',
})
export class FlexItemXlDirective {
  @Input() flex_item_xl_fill: boolean = false;
  @Input() flex_item_xl_grow: FlexGrow = null;
  @Input() flex_item_xl_shrink: FlexShark = null;
  @Input() flex_item_xl_order: number | string = null;
  @Input() flex_item_xl_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_xl_mt_auto: boolean;
  @Input() flex_item_xl_mb_auto: boolean;
  @Input() flex_item_xl_ms_auto: boolean;
  @Input() flex_item_xl_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'xl',
      fill: this.flex_item_xl_fill,
      grow: this.flex_item_xl_grow,
      shrink: this.flex_item_xl_shrink,
      order: this.flex_item_xl_order,
      align_self: this.flex_item_xl_align_self,
      mt_auto: this.flex_item_xl_mt_auto,
      mb_auto: this.flex_item_xl_mb_auto,
      ms_auto: this.flex_item_xl_ms_auto,
      me_auto: this.flex_item_xl_me_auto,
    })
  }
}

@Directive({
  selector: '[flex_item_xxl]',
})
export class FlexItemXxlDirective {
  @Input() flex_item_xxl_fill: boolean = false;
  @Input() flex_item_xxl_grow: FlexGrow = null;
  @Input() flex_item_xxl_shrink: FlexShark = null;
  @Input() flex_item_xxl_order: number | string = null;
  @Input() flex_item_xxl_align_self: FlexAlignSelfMode = null;
  @Input() flex_item_xxl_mt_auto: boolean;
  @Input() flex_item_xxl_mb_auto: boolean;
  @Input() flex_item_xxl_ms_auto: boolean;
  @Input() flex_item_xxl_me_auto: boolean;

  @HostBinding('class') get class() {
    return calcFlexItemClasses({
      media: 'xxl',
      fill: this.flex_item_xxl_fill,
      grow: this.flex_item_xxl_grow,
      shrink: this.flex_item_xxl_shrink,
      order: this.flex_item_xxl_order,
      align_self: this.flex_item_xxl_align_self,
      mt_auto: this.flex_item_xxl_mt_auto,
      mb_auto: this.flex_item_xxl_mb_auto,
      ms_auto: this.flex_item_xxl_ms_auto,
      me_auto: this.flex_item_xxl_me_auto,
    })
  }
}

export const FlexDirectives = [
  FlexDirective,
  FlexSmDirective,
  FlexMdDirective,
  FlexLgDirective,
  FlexXlDirective,
  FlexXxlDirective,
  InlineFlexDirective,
  InlineFlexSmDirective,
  InlineFlexMdDirective,
  InlineFlexLgDirective,
  InlineFlexXlDirective,
  InlineFlexXxlDirective,
  FlexItemDirective,
  FlexItemSmDirective,
  FlexItemMdDirective,
  FlexItemLgDirective,
  FlexItemXlDirective,
  FlexItemXxlDirective,
]
