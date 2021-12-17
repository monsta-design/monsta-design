import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-skeleton-basic',
  template: `
    <ns-skeletons nsActive="true">
      <span nsSkeleton></span>
      <div class="circle" nsSkeleton></div>
    </ns-skeletons>
  `,
  styles: [`
    p, span {
      height: 1rem;
      width: 100%
    }

    .circle {
      width: 100px;
      height: 100px;
      border-radius: 100px;
    }
  `]
})
export class NSDemoSkeletonBasicComponent {
}
