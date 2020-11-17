import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AppState, Tutorial} from './app.state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-read',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center start">
      <ul>
        <li *ngFor="let tutorial of tutorials | async">{{tutorial | json}}</li>
      </ul>
    </div>
  `,
  styles: [
  ]
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  ngOnInit(): void {
  }

}
