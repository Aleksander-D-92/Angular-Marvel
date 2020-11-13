import {Component, OnInit} from '@angular/core';
import {NasaService} from '../../services/nasa.service';
import {APOD} from '../../services/responses';

@Component({
  selector: 'app-apod',
  template: `
    <h1>Astronomy Picture of the Day</h1>
    <mat-form-field class="example-full-width" appearance="fill" color="accent">
      <mat-label>Choose a date</mat-label>
      <input matInput [min]="minDate" [max]="maxDate" [matDatepicker]="picker" (dateChange)="handleDateInput($event.target.value)">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>{{apod?.title}}</mat-card-title>
        <mat-card-subtitle>{{apod?.date}}</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="{{apod?.url}}" alt="The API didn't provide us with an image">
      <mat-card-content>
        <p>
          {{apod?.explanation}}
        </p>
      </mat-card-content>
      <mat-card-actions>
        Service version: {{apod?.service_version}}
      </mat-card-actions>
    </mat-card>
  `
})
export class ApodComponent implements OnInit {
  apod: APOD;
  minDate: Date;
  maxDate: Date;


  constructor(private nasaService: NasaService) {
    this.minDate = new Date(new Date().getFullYear() - 20, 0, 1);
    this.maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());
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
