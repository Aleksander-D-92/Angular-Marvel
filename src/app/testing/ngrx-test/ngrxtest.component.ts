import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from './tutorial.reducers';

@Component({
  selector: 'app-ngrxtest',
  template: `
    <div fxLayout="row" fxLayoutAlign="center start">
      <h1>
        {{message | async}}
      </h1>
      <button (click)="defaultMessage()">Default</button>
      <button (click)="spanishMessage()">Spanish</button>
      <button (click)="frenchMessage()">French</button>
    </div>
  `,
  styles: []
})
export class NgrxtestComponent implements OnInit {
  message: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message = store.select('message');
  }
  defaultMessage(): void {
    this.store.dispatch({type: 'ENGLISH'});
  }
  spanishMessage(): void {
    this.store.dispatch({type: 'SPANISH'});
  }
  frenchMessage(): void {
    this.store.dispatch({type: 'FRENCH'});
  }
  ngOnInit(): void {
  }

}
