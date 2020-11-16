import {Component, Input} from '@angular/core';

export enum Size {
  large = 'large',
  medium = 'medium',
  small = 'small',
  xs = 'xs'
}

@Component({
  selector: 'app-loading-screen',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center" *ngIf="loading">
      <mat-spinner [color]="color"
                   [diameter]="setDiameter()">
      </mat-spinner>
    </div>
  `
})
export class LoadingScreenComponent {
  @Input() loading = true;
  @Input() size: Size = Size.large;
  @Input() color = 'accent';

  setDiameter(): number {
    switch (this.size) {
      case 'large':
        return 300;
      case 'medium':
        return 150;
      case 'small':
        return 100;
      case 'xs':
        return 25;
    }
  }
}
