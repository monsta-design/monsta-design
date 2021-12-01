import {Directive, HostBinding, Input} from '@angular/core';
import {isSpacingSize, SpacingSize} from "@components/layout/utils";

@Directive({
  selector: '[p]'
})
export class PDirective {
  @Input('p') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-p-' + this.size
    }
    return false
  }

  @HostBinding('style.padding')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[pt]'
})
export class PTDirective {
  @Input('pt') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-pt-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-top')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[pb]'
})
export class PBDirective {
  @Input('pb') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-pb-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-bottom')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[ps]'
})
export class PSDirective {
  @Input('ps') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-ps-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-left')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[pe]'
})
export class PEDirective {
  @Input('pe') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-pe-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-right')
  get style() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[px]'
})
export class PXDirective {
  @Input('px') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-px-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-left')
  get left() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.padding-right')
  get right() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[py]'
})
export class PYDirective {
  @Input('py') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isSpacingSize(this.size)) {
      return 'bs-py-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-top')
  get top() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.padding-bottom')
  get bottom() {
    if (!isSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}


export const PaddingDirectives = [
  PDirective,
  PTDirective,
  PBDirective,
  PSDirective,
  PEDirective,
  PXDirective,
  PYDirective,
]
