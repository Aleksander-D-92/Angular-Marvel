import {Component, OnInit} from '@angular/core';
import {NasaService} from '../services/nasa.service';
import {APOD} from '../services/responses';

@Component({
  selector: 'app-apod',
  template: `
    <app-angular-form></app-angular-form>
    <h1>apod</h1>
    <p>{{apod?.explanation}}</p>
    <p>{{apod?.date}}</p>
    <input type="text"/>
    <mat-form-field appearance="fill">
      <mat-label>Chose Past Date</mat-label>
      <input matInput [matDatepicker]="picker" (dateChange)="handleDateInput($event.target.value)">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class ApodComponent implements OnInit {
  apod: APOD;

  constructor(private nasaService: NasaService) {
  }

  handleDateInput(date: Date): void {
    this.nasaService.getAstronomyPictureForDate(date).subscribe((e) => {
      this.apod = e;
    });
  }

  ngOnInit(): void {
    this.nasaService.getAstronomyPictureOfTheDay().subscribe((e) => {
      this.apod = e;
    });
  }
}
