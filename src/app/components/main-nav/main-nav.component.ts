import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  styleUrls: ['./main-nav.styles.css'],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
                   [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
                   [mode]="(isHandset$ | async) ? 'over' : 'side'"
                   [opened]="(isHandset$ | async) === false">
        <mat-toolbar>Marvel Data</mat-toolbar>
        <mat-nav-list>
          <a mat-list-item routerLink="/characters">Characters</a>
          <a mat-list-item routerLink="/neo">Comics</a>
          <a mat-list-item>Link 3</a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary" fxLayout="row" fxLayoutAlign="end center" >
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>

          <a mat-raised-button routerLink="/users/login" color="accent">
            <span class="mat-h2">Login</span>
          </a>
          <a mat-raised-button routerLink="/users/register" color="accent" class="ml-2">
            <span class="mat-h2">Register</span>
          </a>

        </mat-toolbar>
        <!-- Add Content Here -->
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
