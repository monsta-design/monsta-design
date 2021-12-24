import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-form-grid',
  template: `
    <form row>
      <div col>
        <input nsInput type="text" id="formGroupExampleInput" placeholder="Example input placeholder">
      </div>
      <div col>
        <input nsInput type="text" id="formGroupExampleInput2" placeholder="Another input placeholder">
      </div>
    </form>

    <form row g="0">
      <div col>
        <input nsInput type="text" id="formGroupExampleInput" placeholder="Example input placeholder">
      </div>
      <div col>
        <input nsInput type="text" id="formGroupExampleInput2" placeholder="Another input placeholder">
      </div>
    </form>
  `,
  styles: [`
    input {
      margin-bottom: 1rem;
    }
  `]
})
export class NSDemoFormGridComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
