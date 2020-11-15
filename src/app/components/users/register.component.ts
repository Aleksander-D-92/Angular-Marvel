import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-register',
  template: `
    <div fxLayout="row" fxLayoutAlign="center start">
      <mat-card [fxFlex]="fxFlex" class="mt-2">
        <mat-card-header>
          <mat-card-title>User Registration Form</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="onSubmit()" (change)="checkIfPasswordsMatch()">
            <p>{{form.value | json}}</p>
            <p>
              <mat-form-field appearance="legacy" color="accent" style="width: 50%">
                <mat-label>Username</mat-label>
                <input matInput placeholder="Username" formControlName="username">
                <mat-icon matSuffix>account_circle</mat-icon>
                <mat-error>Minimum 5 characters</mat-error>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field appearance="standard" color="accent" style="width: 50%">
                <mat-label>Password</mat-label>
                <input matInput type="password" placeholder="Password" formControlName="password">
                <mat-icon matSuffix>lock</mat-icon>
                <mat-error>Minimum six characters, at least one letter and one number</mat-error>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field appearance="standard" color="accent" style="width: 50%">
                <mat-label>Confirm Password</mat-label>
                <input matInput type="password" placeholder="Confirm Password" formControlName="confirmPassword">
                <mat-icon matSuffix>lock</mat-icon>
                <mat-error>Minimum six characters, at least one letter and one number</mat-error>
            <p></p>
            </mat-form-field>
            </p>
            <button mat-raised-button color="primary" type="submit">Register</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  passwordsMatch: boolean;
  mediaSub: Subscription;
  fxFlex: number;

  constructor(private fb: FormBuilder, private mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    this.createForm();
    this.createMediaObserver();
  }

  createForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')]],
      confirmPassword: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')]]
    });
  }

  createMediaObserver(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((e) => {
      const deviseWidth = e[0].mqAlias;
      if (deviseWidth === 'sm' || deviseWidth === 'xs') {
        this.fxFlex = 95;
      } else {
        this.fxFlex = 50;
      }
    });
  }

  checkIfPasswordsMatch(): void {
    this.passwordsMatch = this.form.controls.password.value === this.form.controls.confirmPassword.value;
  }

  onSubmit(): void {
  }

}
