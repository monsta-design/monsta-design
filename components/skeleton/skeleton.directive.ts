import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[nsSkeleton]'
})
export class SkeletonDirective {
  @HostBinding('class') get getClass() {
    return 'bs-placeholder'
  }
}

export const SkeletonDirectives = [
  SkeletonDirective,
]

