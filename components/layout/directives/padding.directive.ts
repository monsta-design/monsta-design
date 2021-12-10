import {Directive, HostBinding, Input} from '@angular/core';
import {isDefaultSpacingSize, SpacingSize} from "../../types";

@Directive({
  selector: '[_p]'
})
export class PDirective {
  @Input('_p') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-p-' + this.size
    }
    return false
  }

  @HostBinding('style.padding')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_pt]'
})
export class PTDirective {
  @Input('_pt') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-pt-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-top')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_pb]'
})
export class PBDirective {
  @Input('_pb') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-pb-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-bottom')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_ps]'
})
export class PSDirective {
  @Input('_ps') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-ps-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-left')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_pe]'
})
export class PEDirective {
  @Input('_pe') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-pe-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-right')
  get style() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_px]'
})
export class PXDirective {
  @Input('_px') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-px-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-left')
  get left() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.padding-right')
  get right() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }
}

@Directive({
  selector: '[_py]'
})
export class PYDirective {
  @Input('_py') size: SpacingSize | number | string = null;

  @HostBinding('class')
  get class() {
    if (isDefaultSpacingSize(this.size)) {
      return 'bs-py-' + this.size
    }
    return false
  }

  @HostBinding('style.padding-top')
  get top() {
    if (!isDefaultSpacingSize(this.size)) {
      return this.size
    }
    return false
  }

  @HostBinding('style.padding-bottom')
  get bottom() {
    if (!isDefaultSpacingSize(this.size)) {
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
