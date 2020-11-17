import {Component, OnInit} from '@angular/core';
import {fromEvent, timer} from 'rxjs';
import {rejects} from 'assert';
import {fromPromise} from 'rxjs/internal-compatibility';
import {map, takeUntil, throttleTime, timeout} from 'rxjs/operators';

@Component({
  selector: 'app-rxtest',
  template: `
    <div id="app-rxtest" fxLayout="row" fxLayoutAlign="center start" style="background-color: burlywood">
      <h2>
        rxjs test
      </h2>
      <br>
      <button id="my-btn" class="p-3">Clicks</button>
    </div>
  `,
  styles: []
})
export class RxtestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // throttleTime click once per 500ms max, map - refactor the data, takeUntil(timer(5000)) - unsub after
    fromEvent(document.getElementById('my-btn'), 'click')
      // @ts-ignore
      .pipe(throttleTime(500), map((data) => data.clientY), takeUntil(timer(5000)))
      .subscribe((event) => {
        console.log(event);
      }, error => console.log(error));

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolved');
      }, 1000);
    });
    fromPromise(promise).subscribe((e) => {
      console.log(e);
    });
  }

}
