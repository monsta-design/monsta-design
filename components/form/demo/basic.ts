import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-form-basic',
  template: `
    <form action="">
      <div mb="3">
        <label nsFormLabel for="formGroupExampleInput">Example label</label>
        <input nsInput type="text" id="formGroupExampleInput" placeholder="Example input placeholder">
      </div>
      <div mb="3">
        <label nsFormLabel for="formGroupExampleInput2">Another label</label>
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
export class NSDemoFormBasicComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
