import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-nav-user-menu',
  template: `
    <ng-container *ngIf="!hide else responsiveMenu">
      <div fxLayoutGap="10px">
        <a mat-raised-button routerLink="/users/login" color="accent">
          <span class="mat-h2">Login</span>
        </a>
        <a mat-raised-button routerLink="/users/register" color="accent">
          <span class="mat-h2">Register</span>
        </a>
      </div>
    </ng-container>
    <ng-template #responsiveMenu>
      <button mat-icon-button [matMenuTriggerFor]="menu" aria-label="Example icon-button with a menu">
        <mat-icon>more_vert</mat-icon>
      </button>
      <mat-menu #menu="matMenu">
        <a mat-button routerLink="/users/login" color="accent">
          <mat-icon aria-hidden="false" aria-label="Example home icon">login</mat-icon>
          <span class="mat-h2"> Login</span>
        </a>
        <a mat-button routerLink="/users/register" color="accent" style="display: block">
          <mat-icon aria-hidden="false" aria-label="Example home icon">account_box</mat-icon>
          <span class="mat-h2"> Register</span>
        </a>
      </mat-menu>
    </ng-template>
  `
})
export class MainNavUserMenuComponent {
  @Input() hide: boolean;
}
