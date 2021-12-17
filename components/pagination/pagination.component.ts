import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InputBoolean} from "../convert";

@Component({
  selector: 'ns-pagination',
  template: `
    <ul class="bs-pagination">
      <li class="bs-page-item">
        <a class="bs-page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="bs-page-item bs-active"><a class="bs-page-link">1</a></li>
      <li class="bs-page-item"><a class="bs-page-link">2</a></li>
      <li class="bs-page-item"><a class="bs-page-link">3</a></li>
      <li class="bs-page-item">
        <a class="bs-page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  `,
})
export class NSPaginationComponent {

  @Input() nsPageIndex: number
  @Input() nsTotal: number
  @Input() nsPageSize: number
  @Input() @InputBoolean() nsDisabled: boolean
  @Input() @InputBoolean() nsShowQuicker: boolean
  @Input() nsSize: number

  @Output() nsPageIndexChange: EventEmitter<number> = new EventEmitter<number>()
  @Output() nsPageSizeChange: EventEmitter<number> = new EventEmitter<number>()

  constructor() {
  }


}
