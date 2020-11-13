import {from, fromEvent, interval, Observable, of, timer} from 'rxjs';
import {map, throttleTime} from 'rxjs/operators';

class RxExamples {
  observable(): any {
    const observable = new Observable<string>(observer => {
      observer.next('hello');
      observer.next('world');
      observer.next('11111');
      observer.next('2222');
    });
    observable.subscribe(value => {
      console.log(value);
    });
  }

  observableOf(): Observable<number> {
    return of(1, 2, 3, 4, 5);
  }

  observableFrom(): Observable<object> {
    return from([
      {name: 'Joe', age: 30},
      {name: 'Frank', age: 20},
      {name: 'Ryan', age: 50}
    ]);
  }

  observableFromClick(): Observable<any> {
    return fromEvent(document, 'click');
  }

  observableThrottle(): Observable<any> {
    return fromEvent(document, 'mousemove');
  }

  observableFromTimer(): Observable<any> {
    return timer(1000);
  }

  observableFromInterval(): Observable<any> {
    return interval(1000);
  }

  getEmployees(): string[] {
    return ['aaa', 'bbb', 'ccc'];
  }

  callAboveExamples(): void {
    this.observable();
    this.observableFromClick().subscribe(e => console.log(e));
    this.observableFromTimer().subscribe(e => console.log(`${e} from timer`));
    this.observableOf().pipe(map(e => e * 10)).subscribe(e => console.log(e));
    const intervall = this.observableFromInterval().subscribe(e => console.log(`${new Date().getSeconds()}`));
    setTimeout(() => {
      intervall.unsubscribe();
    }, 6000);
    this.observableFrom().subscribe(e => console.log(e));
    this.observableThrottle().pipe(throttleTime(1000)).subscribe(e => console.log(e));
  }
}
