export class Person {
  private _name: string;
  private _age: number;

  get name(): string {
    return this._name;
  }

  get pesho(): number {
    return this._age;
  }

  set name(value: string) {
    this._name = value;
  }

  set pesho(value: number) {
    this._age = value;
  }
}

export class Person2 {
  name: string;
  age: number;
}

export class Person3 {
  constructor(private name: string = 'default name',
              private age: number = 6666) {
  }
}

export class Person4 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// tslint:disable-next-line:only-arrow-functions typedef
(function() {
  
  let person = new Person();
  console.log(person);
  console.log(person.pesho);
  person.pesho = 150;
  console.log(person);

  let person2 = new Person2();
  person2.name = 'adsasd';
  person2.age = 12;
  console.log(person2);

  let person3 = new Person3('name', 100);
  console.log(person3);

  person3 = new Person3();
  console.log(person3);

  let person4 = new Person4('name4', 1200);
  console.log(person4);
})();