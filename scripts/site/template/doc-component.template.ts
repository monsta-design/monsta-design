import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {NSScrollspyComponent} from "@components/scrollspy";

@Component({
  selector     : 'nz-doc-{{component}}-{{language}}',
  templateUrl  : './{{component}}-{{language}}.html',
  preserveWhitespaces: false
})
export class NzDoc{{componentName}}Component {
  @ViewChild('toc') toc:NSScrollspyComponent;
  scrollspyRight = '-100px'
  constructor(private cdr:ChangeDetectorRef){
  }
  ngAfterViewInit() {
    this.scrollspyRight = `-${this.toc.width}px`
    this.cdr.detectChanges()
  }
  goLink(link: string) {
    if (window) {
      window.location.hash = link;
    }
  }
}
