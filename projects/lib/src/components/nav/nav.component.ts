import {Component, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'ns-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NSNavComponent implements OnInit {

  @Input() logo: TemplateRef<any>;

  constructor() {
  }

  ngOnInit(): void {
  }

}
