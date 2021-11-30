import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NSNavbarComponent implements OnInit {
  @Input('brand') _brand: TemplateRef<any>;
  @Input('more') _more: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
