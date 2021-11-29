import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-scss.min';

Prism.languages.angular = Prism.languages.extend('typescript', {});
Prism.languages.insertBefore('angular', 'string', {
  'template-string': {
    pattern: /template[\s]*:[\s]*`(?:\\[\s\S]|[^\\`])*`/,
    greedy: true,
    inside: {
      'html': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: Prism.languages.html
      }
    }
  },
  'styles-string': {
    pattern: /styles[\s]*:[\s]*\[[\s]*`(?:\\[\s\S]|[^\\`])*`[\s]*\]/,
    greedy: true,
    inside: {
      'scss': {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        inside: Prism.languages.scss
      }
    }
  }
}, null);

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  @Input() title: string;
  @Input() description: SafeHtml;
  @Input() code: string;
  highlightCode: SafeHtml;
  showCode: boolean = false;

  constructor(
    private domSanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
    this.highlightCode = this.domSanitizer.bypassSecurityTrustHtml(
      Prism.highlight(this.code, Prism.languages.angular, 'angular')
    );
  }

  toggleCode() {
    this.showCode = !this.showCode;
  }
}
