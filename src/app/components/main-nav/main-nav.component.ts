import {Component, OnDestroy, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable, Subscription} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {MediaObserver} from '@angular/flex-layout';

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
        <mat-toolbar color="primary" fxLayout="row" [fxLayoutAlign]="fxLayoutAlign">
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
            *ngIf="isHandset$ | async">
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          <app-main-nav-user-menu
            [hide]="hide">
          </app-main-nav-user-menu>
        </mat-toolbar>
        <!-- Add Content Here -->
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `
})
export class MainNavComponent implements OnInit, OnDestroy {
  hide: boolean;
  fxLayoutAlign: string;
  mediaSub: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private mediaObserver: MediaObserver) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((e) => {
      const deviseWidth = e[0].mqAlias;
      if (deviseWidth === 'sm' || deviseWidth === 'xs') {
        this.hide = true;
        this.fxLayoutAlign = 'space-between center';
      } else {
        this.hide = false;
        this.fxLayoutAlign = 'end center';
      }

    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

}
