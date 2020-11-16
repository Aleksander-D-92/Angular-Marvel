import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MediaObserver} from '@angular/flex-layout';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {UserService} from '../../services/user.service';
import {SnackbarService} from '../../services/snackbar.service';

@Component({
  selector: 'app-login',
  template: `
    <div fxLayout="row" fxLayoutAlign="center start">
      <mat-card [fxFlex]="fxFlex" class="mt-2">
        <mat-card-header>
          <mat-card-title>User Login Form</mat-card-title>
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
            <button mat-raised-button color="primary" type="submit" class="mr-2">Login</button>
            <a mat-button routerLink="/users/register" style="display: inline-block" disableRipple> or click create a new account</a>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  mediaSub: Subscription;
  fxFlex: number;
  width: string;

  constructor(private fb: FormBuilder,
              private mediaObserver: MediaObserver,
              private router: Router,
              private userService: UserService,
              private snackBarService: SnackbarService) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.buildMediaObserver();
  }

  buildForm(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$')]]
    });
  }

  buildMediaObserver(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((e) => {
      this.fxFlex = this.userService.getFxFlex(e);
      this.width = this.userService.getWidth(e);
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return;
    }
    this.userService.loginUser(this.form.value).subscribe((e) => {
      this.snackBarService.success('Successfully Logged In');
      this.userService.storeJWTAndUpdateStore(e.value);
      this.form.reset();
      this.router.navigate(['/']);
    }, (err) => {
      if (err.status === 403) {
        this.snackBarService.danger('Invalid Credentials');
      }
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
