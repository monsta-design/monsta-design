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
  @Input('display') display: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-sm-' + this.display
  }
}


@Directive({
  selector: '[display_md]',
})
export class DisplayMdDirective {
  @Input('display') display: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-md-' + this.display
  }
}


@Directive({
  selector: '[display_lg]',
})
export class DisplayLgDirective {
  @Input('display') display: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-lg-' + this.display
  }
}


@Directive({
  selector: '[display_xl]',
})
export class DisplayXlDirective {
  @Input('display') display: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-xl-' + this.display
  }
}


@Directive({
  selector: '[display_xxl]',
})
export class DisplayXxlDirective {
  @Input('display') display: DisplayMode = null

  @HostBinding('class') get class() {
    if (this.display === null) {
      return null
    }
    return 'bs-d-xxl-' + this.display
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
