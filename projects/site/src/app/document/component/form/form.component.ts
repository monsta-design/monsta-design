import {Component, OnInit} from '@angular/core';
import formDoc from '!raw-loader!projects/lib/docs/form.md';
import data2 from '!raw-loader!projects/lib/src/input/demo/basic.component';
import * as marked from 'marked';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {


  constructor(
    private sanitizer: DomSanitizer,
  ) {

    // this.docMain = this.sanitizer.bypassSecurityTrustHtml(marked(formDoc));
    //
    // let tokens = marked.lexer(formDoc);
    // console.log('tokens', tokens);
    //
    // const html = marked.parser(tokens);
    // console.log('html', html);
  }

  ngOnInit(): void {
  }

}
