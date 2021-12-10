import {AfterViewInit, Component} from '@angular/core';
import {faCode} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

@Component({
  selector: 'ns-demo-icon-basic',
  template: ``,
})
export class NSDemoIconBasicComponent implements AfterViewInit {

  code: IconDefinition = faCode;

  ngAfterViewInit() {
    let a = faCode
    console.log(a)
  }
}
