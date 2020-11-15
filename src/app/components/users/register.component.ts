import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {MediaObserver} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-register',
  template: `
    <div fxLayout="row" fxLayoutAlign="center start">
      <mat-card [fxFlex]="fxFlex" class="mt-2">
        <mat-card-header>
          <mat-card-title>User Registration Form</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <p>
              <mat-form-field appearance="legacy" color="accent" [style.width]="width">
                <mat-label>Username</mat-label>
                <input matInput placeholder="Username" formControlName="username">
                <mat-icon matSuffix>account_circle</mat-icon>
                <mat-error>Minimum 5 characters</mat-error>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field appearance="standard" color="accent" [style.width]="width">
                <mat-label>Password</mat-label>
                <input matInput type="password" placeholder="Password" formControlName="password">
                <mat-icon matSuffix>lock</mat-icon>
                <mat-error>Minimum six characters, at least one letter and one number</mat-error>
              </mat-form-field>
            </p>
            <p>
              <mat-form-field appearance="standard" color="accent" [style.width]="width">
                <mat-label>Confirm Password</mat-label>
                <input matInput type="password" placeholder="Confirm Password" formControlName="confirmPassword">
                <mat-icon matSuffix>lock</mat-icon>
                <mat-error *ngIf="!passwordsMatch">Passwords do not match</mat-error>
                <mat-error>Minimum six characters, at least one letter and one number</mat-error>
              </mat-form-field>
            </p>
            <button mat-raised-button color="primary" type="submit">Register</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class RegisterComponent implements OnInit, OnDestroy {
  form: FormGroup;
  mediaSub: Subscription;
  passwordsMatch = true;
  fxFlex: number;
  width: string;

  constructor(private fb: FormBuilder,
              private mediaObserver: MediaObserver,
              private router: Router,
              private userService: UserService) {
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
        this.width = '85%';
      } else {
        this.fxFlex = 50;
        this.width = '60%';
      }
    });
  }


  onSubmit(): void {
    if (this.form.controls.password.value !== this.form.controls.confirmPassword.value) {
      this.passwordsMatch = false;
      return;
    }
    if (!this.form.valid) {
      return;
    }
    this.form.reset();
    this.router.navigate(['users/login']);
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
