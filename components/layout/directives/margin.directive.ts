import {Directive, HostBinding, Input} from '@angular/core';
import {isDefaultSpacingSize, SpacingSize} from "../../types";

@Directive({
  selector: '[_m]'
})
export class MDirective {
  @Input('_m') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-m-' + this.size
    }
    return false
  }

  @HostBinding('style.margin')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_mt]'
})
export class MTDirective {
  @Input('_mt') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-mt-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-top')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_mb]'
})
export class MBDirective {
  @Input('_mb') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-mb-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-bottom')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_ms]'
})
export class MSDirective {
  @Input('_ms') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-ms-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-left')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_me]'
})
export class MEDirective {
  @Input('_me') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-me-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-right')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_mx]'
})
export class MXDirective {
  @Input('_mx') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-mx-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-left')
  get left() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.margin-right')
  get right() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_my]'
})
export class MYDirective {
  @Input('_my') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-my-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-top')
  get top() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.margin-bottom')
  get bottom() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

export const MarginDirectives = [
  MDirective,
  MTDirective,
  MBDirective,
  MSDirective,
  MEDirective,
  MXDirective,
  MYDirective,
]
