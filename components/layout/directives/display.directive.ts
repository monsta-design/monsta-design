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
  selector: '[_display]',
})
export class DisplayDirective {
  @Input('display') _display: DisplayMode = null;

  @HostBinding('class') get class() {
    if (this._display === null) {
      return null
    }
    return 'bs-d-' + this._display
  }
}

@Directive({
  selector: '[_display_sm]',
})
export class DisplaySmDirective {
  @Input() _display_sm: DisplayMode = null

  @HostBinding('class') get class() {
    if (this._display_sm === null) {
      return null
    }
    return 'bs-d-sm-' + this._display_sm
  }
}


@Directive({
  selector: '[_display_md]',
})
export class DisplayMdDirective {
  @Input() _display_md: DisplayMode = null

  @HostBinding('class') get class() {
    if (this._display_md === null) {
      return null
    }
    return 'bs-d-md-' + this._display_md
  }
}


@Directive({
  selector: '[_display_lg]',
})
export class DisplayLgDirective {
  @Input() _display_lg: DisplayMode = null

  @HostBinding('class') get class() {
    if (this._display_lg === null) {
      return null
    }
    return 'bs-d-lg-' + this._display_lg
  }
}


@Directive({
  selector: '[display_xl]',
})
export class DisplayXlDirective {
  @Input() _display_xl: DisplayMode = null

  @HostBinding('class') get class() {
    if (this._display_xl === null) {
      return null
    }
    return 'bs-d-xl-' + this._display_xl
  }
}


@Directive({
  selector: '[_display_xxl]',
})
export class DisplayXxlDirective {
  @Input() _display_xxl: DisplayMode = null

  @HostBinding('class') get class() {
    if (this._display_xxl === null) {
      return null
    }
    return 'bs-d-xxl-' + this._display_xxl
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
