import {Direction, Directionality} from '@angular/cdk/bidi';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  OnInit,
  Optional, QueryList,
  ViewEncapsulation
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {NSSiderComponent} from './sider.component';

@Component({
  selector: 'ns-layout',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: false,
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class.d-flex]': 'true',
    '[class.flex-column]': 'true',
    '[class.layout]': 'true',
    '[class.layout-has-sider]': `listOfNSSiderComponent.length > 0`,
  }
})
export class NSLayoutComponent implements OnInit {
  @ContentChildren(NSSiderComponent) listOfNSSiderComponent!: QueryList<NSSiderComponent>;

  dir: Direction = 'ltr';
  private destroy$ = new Subject<void>();

  constructor(private elementRef: ElementRef, @Optional() private directionality: Directionality) {

  }

  ngOnInit(): void {
    this.dir = this.directionality.value;
    this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction: Direction) => {
      this.dir = direction;
    });
  }
}
