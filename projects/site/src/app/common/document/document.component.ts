import {
  AfterViewInit, ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ViewContainerRef
} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import * as marked from 'marked';

export interface Example {

  doc: string;
  code: string;
  component: any;
  title?: string;
  description?: SafeHtml;

}

export interface Examples {
  col: 1 | 2;
  children: Example[]
}

@Directive({selector: 'example-component'})
export class ExampleComponentDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) {
  }
}

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit, AfterViewInit {

  @Input() doc: string;
  @Input() examples: Examples;
  @ViewChildren(ExampleComponentDirective) exampleRefs!: QueryList<ExampleComponentDirective>;
  toc: string[] = [];

  main: SafeHtml;
  api: SafeHtml;

  constructor(
    private domSanitizer: DomSanitizer,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
  ) {
  }

  ngOnInit() {
    // 渲染主文档
    let tokens = marked.lexer(this.doc);
    let division: number = tokens.length - 1;
    let hasAPI = false;
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type == 'heading' && tokens[i].depth == 2 && tokens[i].text == 'API') {
        division = i;
        hasAPI = true;
        break;
      }
    }
    this.main = this.domSanitizer.bypassSecurityTrustHtml(marked.parser(tokens.slice(0, division)));
    if (hasAPI) {
      this.api = this.domSanitizer.bypassSecurityTrustHtml(marked.parser(tokens.slice(division, tokens.length)));
    }

    // 渲染TOC
    if (!this.examples) {
      for (let token of tokens) {
        if (token.type == 'heading' && token.depth == 2) {
          this.toc.push(token.text);
        }
      }
    } else {
      for (let example of this.examples.children) {
        let _tokens = marked.lexer(example.doc);
        for (let i = 0; i < _tokens.length; i++) {
          let _token = _tokens[i];
          if (_token.type == 'heading' && _token.depth == 1) {
            this.toc.push(_token.text);
            example.title = _token.text;
            example.description = this.domSanitizer.bypassSecurityTrustHtml(marked.parser(_tokens.slice(i - 1)));
            break;
          }
        }

      }
      if (hasAPI) {
        this.toc.push('API');
      }
    }
  }

  ngAfterViewInit() {
    // 渲染示例
    if (this.examples) {
      let refs = this.exampleRefs.toArray();
      for (let i = 0; i < this.examples.children.length; i++) {
        let example = this.examples.children[i];
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(example.component);
        refs[i].viewContainerRef.createComponent(componentFactory);
        this.cd.detectChanges();
      }
    }
  }

}
