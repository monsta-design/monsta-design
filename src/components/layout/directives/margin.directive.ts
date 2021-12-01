import {Directive, HostBinding, Input} from '@angular/core';
import {isSpacingSize, SpacingSize} from "@components/layout/utils";

@Directive({
  selector: '[m]'
})
export class MDirective {
  @Input('m') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-m-' + this.size
    }
    return false
  }

  @HostBinding('style.margin')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[mt]'
})
export class MTDirective {
  @Input('mt') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-mt-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-top')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[mb]'
})
export class MBDirective {
  @Input('mb') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-mb-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-bottom')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[ms]'
})
export class MSDirective {
  @Input('ms') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-ms-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-left')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[me]'
})
export class MEDirective {
  @Input('me') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-me-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-right')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[mx]'
})
export class MXDirective {
  @Input('mx') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-mx-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-left')
  get left() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.margin-right')
  get right() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[my]'
})
export class MYDirective {
  @Input('my') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-my-' + this.size
    }
    return false
  }

  @HostBinding('style.margin-top')
  get top() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.margin-bottom')
  get bottom() {
    if (!isSpacingSize(this.size)) {
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
