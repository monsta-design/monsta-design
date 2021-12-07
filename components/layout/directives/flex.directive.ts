import {Directive, HostBinding, Input} from '@angular/core';

export type FlexDirectionMode = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustifyMode = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
export type FlexAlignMode = 'start' | 'end' | 'center' | 'stretch';
export type FlexWrapMode = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGrow = 0 | 1 | '0' | '1';
export type FlexShark = 0 | 1 | '0' | '1';

interface FlexAttributes {
  inline: boolean,
  size: string,
  direction: FlexDirectionMode,
  justify_content: FlexJustifyMode,
  align_items: FlexAlignMode,
  align_content: FlexAlignMode,
  fill: boolean,
  grow: FlexGrow,
  shrink: FlexShark,
  wrap: FlexWrapMode,
  order: number | string,
}

function calcFlexClasses(attributes: FlexAttributes): string {

  attributes.size = attributes.size !== null ? '-' + attributes.size : ''

  let classes = [
    `bs-d${attributes.size}${attributes.inline ? '-inline' : ''}-flex`,
  ]
  if (attributes.direction !== null) {
    classes.push(`bs-flex${attributes.size}-` + attributes.direction)
  }
  if (attributes.justify_content !== null) {
    classes.push(`bs-justify-content${attributes.size}-` + attributes.justify_content)
  }
  if (attributes.align_items !== null) {
    classes.push(`bs-align-items${attributes.size}-` + attributes.align_items)
  }
  if (attributes.align_content !== null) {
    classes.push(`bs-align-content${attributes.size}-` + attributes.align_content)
  }
  if (attributes.fill) {
    classes.push(`bs-flex${attributes.size}-fill`)
  }
  if (attributes.grow !== null) {
    classes.push(`bs-flex${attributes.size}-grow-` + attributes.grow)
  }
  if (attributes.shrink !== null) {
    classes.push(`bs-flex${attributes.size}-shrink-` + attributes.shrink)
  }
  if (attributes.wrap !== null) {
    classes.push(`bs-flex${attributes.size}-` + attributes.wrap)
  }
  if (attributes.order !== null) {
    classes.push(`bs-order${attributes.size}-` + attributes.order)
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
  @Input() flex_fill: boolean = false;
  @Input() flex_grow: FlexGrow = null;
  @Input() flex_shrink: FlexShark = null;
  @Input() flex_wrap: FlexWrapMode = null;
  @Input() flex_order: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: null,
      direction: this.flex_direction,
      justify_content: this.flex_justify_content,
      align_items: this.flex_align_items,
      align_content: this.flex_align_content,
      fill: this.flex_fill,
      grow: this.flex_grow,
      shrink: this.flex_shrink,
      wrap: this.flex_wrap,
      order: this.flex_order,
    })
  }
}

@Directive({
  selector: '[flex_sm]',
})
export class FlexSmDirective {
  @Input() flex_direction_sm: FlexDirectionMode = null;
  @Input() flex_justify_content_sm: FlexJustifyMode = null;
  @Input() flex_align_items_sm: FlexAlignMode = null;
  @Input() flex_align_content_sm: FlexAlignMode = null;
  @Input() flex_fill_sm: boolean = false;
  @Input() flex_grow_sm: FlexGrow = null;
  @Input() flex_shrink_sm: FlexShark = null;
  @Input() flex_wrap_sm: FlexWrapMode = null;
  @Input() flex_order_sm: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: 'sm',
      direction: this.flex_direction_sm,
      justify_content: this.flex_justify_content_sm,
      align_items: this.flex_align_items_sm,
      align_content: this.flex_align_content_sm,
      fill: this.flex_fill_sm,
      grow: this.flex_grow_sm,
      shrink: this.flex_shrink_sm,
      wrap: this.flex_wrap_sm,
      order: this.flex_order_sm,
    })
  }
}

@Directive({
  selector: '[flex_md]',
})
export class FlexMdDirective {
  @Input() flex_direction_md: FlexDirectionMode = null;
  @Input() flex_justify_content_md: FlexJustifyMode = null;
  @Input() flex_align_items_md: FlexAlignMode = null;
  @Input() flex_align_content_md: FlexAlignMode = null;
  @Input() flex_fill_md: boolean = false;
  @Input() flex_grow_md: FlexGrow = null;
  @Input() flex_shrink_md: FlexShark = null;
  @Input() flex_wrap_md: FlexWrapMode = null;
  @Input() flex_order_md: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: 'md',
      direction: this.flex_direction_md,
      justify_content: this.flex_justify_content_md,
      align_items: this.flex_align_items_md,
      align_content: this.flex_align_content_md,
      fill: this.flex_fill_md,
      grow: this.flex_grow_md,
      shrink: this.flex_shrink_md,
      wrap: this.flex_wrap_md,
      order: this.flex_order_md,
    })
  }
}

@Directive({
  selector: '[flex_lg]',
})
export class FlexLgDirective {
  @Input() flex_direction_lg: FlexDirectionMode = null;
  @Input() flex_justify_content_lg: FlexJustifyMode = null;
  @Input() flex_align_items_lg: FlexAlignMode = null;
  @Input() flex_align_content_lg: FlexAlignMode = null;
  @Input() flex_fill_lg: boolean = false;
  @Input() flex_grow_lg: FlexGrow = null;
  @Input() flex_shrink_lg: FlexShark = null;
  @Input() flex_wrap_lg: FlexWrapMode = null;
  @Input() flex_order_lg: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: 'lg',
      direction: this.flex_direction_lg,
      justify_content: this.flex_justify_content_lg,
      align_items: this.flex_align_items_lg,
      align_content: this.flex_align_content_lg,
      fill: this.flex_fill_lg,
      grow: this.flex_grow_lg,
      shrink: this.flex_shrink_lg,
      wrap: this.flex_wrap_lg,
      order: this.flex_order_lg,
    })
  }
}

@Directive({
  selector: '[flex_xl]',
})
export class FlexXlDirective {
  @Input() flex_direction_xl: FlexDirectionMode = null;
  @Input() flex_justify_content_xl: FlexJustifyMode = null;
  @Input() flex_align_items_xl: FlexAlignMode = null;
  @Input() flex_align_content_xl: FlexAlignMode = null;
  @Input() flex_fill_xl: boolean = false;
  @Input() flex_grow_xl: FlexGrow = null;
  @Input() flex_shrink_xl: FlexShark = null;
  @Input() flex_wrap_xl: FlexWrapMode = null;
  @Input() flex_order_xl: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: 'xl',
      direction: this.flex_direction_xl,
      justify_content: this.flex_justify_content_xl,
      align_items: this.flex_align_items_xl,
      align_content: this.flex_align_content_xl,
      fill: this.flex_fill_xl,
      grow: this.flex_grow_xl,
      shrink: this.flex_shrink_xl,
      wrap: this.flex_wrap_xl,
      order: this.flex_order_xl,
    })
  }
}

@Directive({
  selector: '[flex_xxl]',
})
export class FlexXxlDirective {
  @Input() flex_direction_xxl: FlexDirectionMode = null;
  @Input() flex_justify_content_xxl: FlexJustifyMode = null;
  @Input() flex_align_items_xxl: FlexAlignMode = null;
  @Input() flex_align_content_xxl: FlexAlignMode = null;
  @Input() flex_fill_xxl: boolean = false;
  @Input() flex_grow_xxl: FlexGrow = null;
  @Input() flex_shrink_xxl: FlexShark = null;
  @Input() flex_wrap_xxl: FlexWrapMode = null;
  @Input() flex_order_xxl: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: false,
      size: 'xxl',
      direction: this.flex_direction_xxl,
      justify_content: this.flex_justify_content_xxl,
      align_items: this.flex_align_items_xxl,
      align_content: this.flex_align_content_xxl,
      fill: this.flex_fill_xxl,
      grow: this.flex_grow_xxl,
      shrink: this.flex_shrink_xxl,
      wrap: this.flex_wrap_xxl,
      order: this.flex_order_xxl,
    })
  }
}

@Directive({
  selector: '[inline_flex]',
})
export class InlineFlexDirective {
  @Input() flex_direction_sm: FlexDirectionMode = null;
  @Input() flex_justify_content_sm: FlexJustifyMode = null;
  @Input() flex_align_items_sm: FlexAlignMode = null;
  @Input() flex_align_content_sm: FlexAlignMode = null;
  @Input() flex_fill_sm: boolean = false;
  @Input() flex_grow_sm: FlexGrow = null;
  @Input() flex_shrink_sm: FlexShark = null;
  @Input() flex_wrap_sm: FlexWrapMode = null;
  @Input() flex_order_sm: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: null,
      direction: this.flex_direction_sm,
      justify_content: this.flex_justify_content_sm,
      align_items: this.flex_align_items_sm,
      align_content: this.flex_align_content_sm,
      fill: this.flex_fill_sm,
      grow: this.flex_grow_sm,
      shrink: this.flex_shrink_sm,
      wrap: this.flex_wrap_sm,
      order: this.flex_order_sm,
    })
  }
}

@Directive({
  selector: '[inline_flex_sm]',
})
export class InlineFlexSmDirective {
  @Input() flex_direction_sm: FlexDirectionMode = null;
  @Input() flex_justify_content_sm: FlexJustifyMode = null;
  @Input() flex_align_items_sm: FlexAlignMode = null;
  @Input() flex_align_content_sm: FlexAlignMode = null;
  @Input() flex_fill_sm: boolean = false;
  @Input() flex_grow_sm: FlexGrow = null;
  @Input() flex_shrink_sm: FlexShark = null;
  @Input() flex_wrap_sm: FlexWrapMode = null;
  @Input() flex_order_sm: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: 'sm',
      direction: this.flex_direction_sm,
      justify_content: this.flex_justify_content_sm,
      align_items: this.flex_align_items_sm,
      align_content: this.flex_align_content_sm,
      fill: this.flex_fill_sm,
      grow: this.flex_grow_sm,
      shrink: this.flex_shrink_sm,
      wrap: this.flex_wrap_sm,
      order: this.flex_order_sm,
    })
  }
}

@Directive({
  selector: '[inline_flex_md]',
})
export class InlineFlexMdDirective {
  @Input() flex_direction_md: FlexDirectionMode = null;
  @Input() flex_justify_content_md: FlexJustifyMode = null;
  @Input() flex_align_items_md: FlexAlignMode = null;
  @Input() flex_align_content_md: FlexAlignMode = null;
  @Input() flex_fill_md: boolean = false;
  @Input() flex_grow_md: FlexGrow = null;
  @Input() flex_shrink_md: FlexShark = null;
  @Input() flex_wrap_md: FlexWrapMode = null;
  @Input() flex_order_md: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: 'md',
      direction: this.flex_direction_md,
      justify_content: this.flex_justify_content_md,
      align_items: this.flex_align_items_md,
      align_content: this.flex_align_content_md,
      fill: this.flex_fill_md,
      grow: this.flex_grow_md,
      shrink: this.flex_shrink_md,
      wrap: this.flex_wrap_md,
      order: this.flex_order_md,
    })
  }
}

@Directive({
  selector: '[inline_flex_lg]',
})
export class InlineFlexLgDirective {
  @Input() flex_direction_lg: FlexDirectionMode = null;
  @Input() flex_justify_content_lg: FlexJustifyMode = null;
  @Input() flex_align_items_lg: FlexAlignMode = null;
  @Input() flex_align_content_lg: FlexAlignMode = null;
  @Input() flex_fill_lg: boolean = false;
  @Input() flex_grow_lg: FlexGrow = null;
  @Input() flex_shrink_lg: FlexShark = null;
  @Input() flex_wrap_lg: FlexWrapMode = null;
  @Input() flex_order_lg: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: 'lg',
      direction: this.flex_direction_lg,
      justify_content: this.flex_justify_content_lg,
      align_items: this.flex_align_items_lg,
      align_content: this.flex_align_content_lg,
      fill: this.flex_fill_lg,
      grow: this.flex_grow_lg,
      shrink: this.flex_shrink_lg,
      wrap: this.flex_wrap_lg,
      order: this.flex_order_lg,
    })
  }
}

@Directive({
  selector: '[inline_flex_xl]',
})
export class InlineFlexXlDirective {
  @Input() flex_direction_xl: FlexDirectionMode = null;
  @Input() flex_justify_content_xl: FlexJustifyMode = null;
  @Input() flex_align_items_xl: FlexAlignMode = null;
  @Input() flex_align_content_xl: FlexAlignMode = null;
  @Input() flex_fill_xl: boolean = false;
  @Input() flex_grow_xl: FlexGrow = null;
  @Input() flex_shrink_xl: FlexShark = null;
  @Input() flex_wrap_xl: FlexWrapMode = null;
  @Input() flex_order_xl: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: 'xl',
      direction: this.flex_direction_xl,
      justify_content: this.flex_justify_content_xl,
      align_items: this.flex_align_items_xl,
      align_content: this.flex_align_content_xl,
      fill: this.flex_fill_xl,
      grow: this.flex_grow_xl,
      shrink: this.flex_shrink_xl,
      wrap: this.flex_wrap_xl,
      order: this.flex_order_xl,
    })
  }
}

@Directive({
  selector: '[inline_flex_xxl]',
})
export class InlineFlexXxlDirective {
  @Input() flex_direction_xxl: FlexDirectionMode = null;
  @Input() flex_justify_content_xxl: FlexJustifyMode = null;
  @Input() flex_align_items_xxl: FlexAlignMode = null;
  @Input() flex_align_content_xxl: FlexAlignMode = null;
  @Input() flex_fill_xxl: boolean = false;
  @Input() flex_grow_xxl: FlexGrow = null;
  @Input() flex_shrink_xxl: FlexShark = null;
  @Input() flex_wrap_xxl: FlexWrapMode = null;
  @Input() flex_order_xxl: number | string = null;

  @HostBinding('class') get class() {
    return calcFlexClasses({
      inline: true,
      size: 'xxl',
      direction: this.flex_direction_xxl,
      justify_content: this.flex_justify_content_xxl,
      align_items: this.flex_align_items_xxl,
      align_content: this.flex_align_content_xxl,
      fill: this.flex_fill_xxl,
      grow: this.flex_grow_xxl,
      shrink: this.flex_shrink_xxl,
      wrap: this.flex_wrap_xxl,
      order: this.flex_order_xxl,
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
]
