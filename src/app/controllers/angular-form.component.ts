import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-angular-form',
  template: `
    <h2>testing forms</h2>
    <form name="form" [formGroup]="form">
      <div class="form-group">
        <label> First Name
          <input type="text"
                 formControlName="firstName"
                 [ngClass]="{'is-invalid': form.get('firstName').touched && form.get('firstName').invalid}">
        </label>
        <div class="invalid-feedback" >
          First name is required
        </div>
      </div>
      <br>
      <div class="form-group">
        <label> last name
          <input type="text">
        </label>
        <div class="invalid-feedback">
          Last name is required
        </div>
      </div>
      <br>
      <div class="form-group">
        <label> Email
          <input type="text">
        </label>
        <div class="invalid-feedback">
          <div> Email is required</div>
          <div> Email must be at least 6 chars long</div>
        </div>
      </div>
      <br>
      <div class="form-group">
        <label> Password
          <input type="text">
        </label>
        <div class="invalid-feedback">
          <div> Password is required</div>
          <div> Password must be at least 6 chars long</div>
        </div>
      </div>
      <button>Submit the form</button>
    </form>
  `
})
export class AngularFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  constructor() {
  }
}
