import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../services/interfaces/characters';
import {UtilityService} from '../../services/utility.service';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {Size} from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-character-details',
  template: `
    <app-loading-screen [size]="size" [loading]="character === undefined"></app-loading-screen>
    <div fxLayout="row" fxLayoutAlign="center center" class="m-3">
      <mat-card class="example-card" [fxFlex]="fxFlex">
        <mat-card-header>
          <mat-card-title>{{character.name}}</mat-card-title>
          <mat-card-subtitle [innerText]="'Last Modified: '+ utilityService.formatDate(character.modified)"></mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image
             src="{{character.thumbnail.path +'/standard_fantastic.' + character.thumbnail.extension}}"
             alt="no IMG was provided by the api">
        <mat-card-content>
          <p>
            {{character.description}}
          </p>
          <p>{{character.comics.available}}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button (click)="onGoBack()" color="accent">
            <mat-icon aria-hidden="false" aria-label="Example home icon">keyboard_backspace</mat-icon>
            <span class="mat-h1"> Go back</span>
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`

  `]
})
export class CharacterDetailsComponent implements OnInit, OnDestroy {
  characterId: string;
  character: Character;
  mediaSub: Subscription;
  fxFlex: number;
  size = Size.large;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private marvelService: MarvelService,
              private mediaObserver: MediaObserver,
              public utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.marvelService.getCharacterById(this.characterId).subscribe((e) => {
      this.character = e.data.results[0];
    });

    this.mediaSub = this.mediaObserver.asObservable().subscribe((e: MediaChange[]) => {
      const deviseWidth = e[0].mqAlias;
      if (deviseWidth === 'sm' || deviseWidth === 'xs') {
        this.fxFlex = 95;
      } else {
        this.fxFlex = 50;
      }
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }

  onGoBack(): void {
    this.location.back();
  }

}
