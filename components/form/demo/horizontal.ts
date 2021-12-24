import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ns-demo-form-horizontal',
  template: `
    <form>
      <div row mb="1rem">
        <label col="2" nsFormLabel for="inputEmail3">Email</label>
        <div col="10">
          <input nsInput type="email" id="inputEmail3">
        </div>
      </div>
      <div row mb="1rem">
        <label nsFormLabel col="2" for="inputPassword3">Password</label>
        <div col="10">
          <input nsInput type="password" id="inputPassword3">
        </div>
      </div>
      <fieldset row mb="1rem">
        <legend class="bs-col-form-label" col="2" pt="0">Radios</legend>
        <div col="10">
          <div class="bs-form-check">
            <input class="bs-form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
            <label class="bs-form-check-label" for="gridRadios1">
              First radio
            </label>
          </div>
          <div class="bs-form-check">
            <input class="bs-form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
            <label class="bs-form-check-label" for="gridRadios2">
              Second radio
            </label>
          </div>
          <div class="bs-form-check bs-disabled">
            <input class="bs-form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
            <label class="bs-form-check-label" for="gridRadios3">
              Third disabled radio
            </label>
          </div>
        </div>
      </fieldset>
      <div row mb="1rem">
        <div col="10" class="bs-offset-2">
          <div class="bs-form-check">
            <input class="bs-form-check-input" type="checkbox" id="gridCheck1">
            <label class="bs-form-check-label" for="gridCheck1">
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <div row mb="1rem">
        <div col="10" class="bs-offset-2">
          <button type="submit" nsButton="primary">Sign in</button>
        </div>
      </div>
    </form>
  `,
  styles: [`
    /*input {*/
    /*  margin-bottom: 1rem;*/
    /*}*/
  `]
})
export class NSDemoFormHorizontalComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
