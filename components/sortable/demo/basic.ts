import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-sortable-basic',
  template: `
    <div [nsSortable]="items">
      <span *ngFor="let item of items">{{ item }}</span>
    </div>
  `,
  styles: [`
    div {
      background: gray;
      display: flex;
    }

    span {
      background: #a7c4fb;
      width: 60px;
      height: 60px;
      margin-right: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class NSDemoSortableBasicComponent {
  items = [1, 2, 3, 4, 5];
}
