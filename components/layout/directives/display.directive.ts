import {Directive, HostBinding, Input} from "@angular/core";

export type DisplayMode =
  'none'
  | 'inline'
  | 'inline-block'
  | 'block'
  | 'grid'
  | 'table'
  | 'table-cell'
  | 'table-row'
  | 'flex'
  | 'inline-flex';

@Directive({
  selector: '[display]',
})
export class DisplayDirective {
  @Input('display') display: DisplayMode = null;

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-' + this.display
  }
}

@Directive({
  selector: '[display_sm]',
})
export class DisplaySmDirective {
  @Input() display_sm: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display_sm === null) {
      return null
    }
    return 'bs-d-sm-' + this.display_sm
  }
}


@Directive({
  selector: '[display_md]',
})
export class DisplayMdDirective {
  @Input() display_md: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display_md === null) {
      return null
    }
    return 'bs-d-md-' + this.display_md
  }
}


@Directive({
  selector: '[display_lg]',
})
export class DisplayLgDirective {
  @Input() display_lg: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display_lg === null) {
      return null
    }
    return 'bs-d-lg-' + this.display_lg
  }
}


@Directive({
  selector: '[display_xl]',
})
export class DisplayXlDirective {
  @Input() display_xl: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display_xl === null) {
      return null
    }
    return 'bs-d-xl-' + this.display_xl
  }
}


@Directive({
  selector: '[display_xxl]',
})
export class DisplayXxlDirective {
  @Input() display_xxl: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display_xxl === null) {
      return null
    }
    return 'bs-d-xxl-' + this.display_xxl
  }
}

export const DisplayDirectives = [
  DisplayDirective,
  DisplaySmDirective,
  DisplayMdDirective,
  DisplayLgDirective,
  DisplayXlDirective,
  DisplayXxlDirective,
]
