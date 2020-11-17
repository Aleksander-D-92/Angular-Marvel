import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from './app.state';
import {AddTutorial, RemoveTutorial} from './actionss';

@Component({
  selector: 'app-create',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="center start">
      <form [formGroup]="addForm" (ngSubmit)="addTutorial()" fxFlex="100" fxLayoutAlign="center center">
        <input type="text" placeholder="name" formControlName="name">
        <input type="text" placeholder="url" formControlName="url">
        <button type="submit">Submit me</button>
      </form>
      <form [formGroup]="removeForm" (ngSubmit)="removeTutorial()" fxFlex="100" fxLayoutAlign="center center">
        <input type="text" placeholder="name" formControlName="name">
        <input type="text" placeholder="URL" formControlName="url">
        <button type="submit">Remove</button>
      </form>
    </div>
  `,
  styles: []
})
export class CreateComponent implements OnInit {
  addForm: FormGroup;
  removeForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.addForm = this.fb.group({
      name: [''],
      url: ['']
    });
    this.removeForm = this.fb.group({
      url: [''],
      name: ['']
    });
  }

  addTutorial(): void {
    this.store.dispatch(new AddTutorial(this.addForm.value));
  }

  removeTutorial(): void {
    this.store.dispatch(new RemoveTutorial(this.removeForm.value));
  }

  ngOnInit(): void {
  }

}
