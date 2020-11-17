import {Component, OnInit} from '@angular/core';
import {IConstructor, IPerson, Person3, Person4, Person5} from './Person';
import {Greeting, Harry, Hungry} from './types';

@Component({
  selector: 'app-ts-test',
  template: `
    <div fxLayout="row" fxLayoutAlign="center start">
      <ul>
        <li>{{person3 | json}}</li>
        <li>{{person4 | json}}</li>
        <li>{{person5.name | json}}</li>
        <li>{{greeting('greeting type')}}</li>
        <li>{{hungry}}</li>
        <li>{{myType1 | json}}</li>
        <li>{{myType2 | json}}</li>
        <li>{{myInterface | json}}</li>
      </ul>
    </div>
  `,
  styles: []
})
export class TsTestComponent implements OnInit {
  person3: Person3;
  person4: Person4;
  person5: Person5;
  greeting: Greeting;
  hungry: Hungry;
  myType1: Harry;
  myType2: Harry;
  myInterface: IPerson | IConstructor;

  constructor() {
  }

  ngOnInit(): void {
    this.person3 = new Person3('sasho', 12);
    this.person4 = new Person4('sdaa', 12);
    this.person5 = new Person5();
    this.person5.name = 'petko';
    this.hungry = false;
    this.greeting = (name: string) => {

      return name.substr(0, name.length).toString().toUpperCase();
    };
    this.myType1 = {
      isStreaming: true
    };
    this.myType2 = {
      youtube: false,
      hungry: true,
      name: 'sasho'
    };
    this.myInterface = {salary: 200, constructing: true, hungry: true, name: 'damqn'};
  }

}
