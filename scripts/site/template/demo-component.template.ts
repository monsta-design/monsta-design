import {AfterViewInit, ChangeDetectorRef, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {NSScrollspyComponent} from "@components/scrollspy";
// import { NzCodeBoxComponent } from '../share/codebox/codebox.component';

@Component({
  selector     : 'monsta-demo-{{component}}',
  preserveWhitespaces: false,
  templateUrl  : './{{language}}.html'
})
export class {{componentName}} implements AfterViewInit {
  expanded = false;
  //@ViewChildren(NzCodeBoxComponent) codeBoxes!: QueryList<NzCodeBoxComponent>;
  @ViewChild('toc') toc:NSScrollspyComponent;
  scrollspyRight = '-100px'
  constructor(private cdr:ChangeDetectorRef){
  }
  ngAfterViewInit() {
    this.scrollspyRight = `-${this.toc.width}px`
    this.cdr.detectChanges()
  }

  goLink(link: string): void {
    if (window) {
      window.location.hash = link;
    }
  }

  expandAllCode(): void {
    // this.expanded = !this.expanded;
    // this.codeBoxes.forEach(code => {
    //   code.nzExpanded = this.expanded;
    //   code.expandCode(this.expanded);
    //   code.check();
    // });
  }

}
