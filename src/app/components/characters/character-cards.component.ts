import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Character} from '../../services/interfaces/characters';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-character-card',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-around start">
      <mat-card class="character-card" *ngFor="let char of characters" [fxFlex]="fxFlex">
        <mat-card-header>
          <mat-card-title>{{char.name}}</mat-card-title>
          <mat-card-subtitle [innerText]="'Last Modified: ' + utilityService.formatDate(char.modified)"></mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src="{{ char.thumbnail.path + '/standard_fantastic.' + char.thumbnail.extension}}"
             alt="no image was provided">
        <mat-card-content class="character-card-content">
          <p class="mat-body">
            {{char.description}}
          </p>
          <p *ngIf="char.description === ''" class="mat-body">
            No Description Available
          </p>
        </mat-card-content>
        <mat-card-actions>
          <a mat-raised-button routerLink="/character/{{char.id}}" color="accent">
            <span class="mat-h2">Details</span>
          </a>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .example-header-image {
      background-size: cover;
    }

    .character-card {
      margin-top: 10px;
    }

    .character-card-content {
      min-height: 100px;
    }

  `]
})
export class CharacterCardsComponent implements OnInit, OnDestroy {
  @Input() characters: Character[];
  mediaSub: Subscription;
  fxFlex: number;

  constructor(private mediaObserver: MediaObserver, public utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.asObservable().subscribe((e: MediaChange[]) => {
      const deviseWidth = e[0].mqAlias;
      if (deviseWidth === 'xs') {
        this.fxFlex = 90;
      } else if (deviseWidth === 'lg' || deviseWidth === 'xl') {
        this.fxFlex = 24;
      } else {
        this.fxFlex = 48;
      }
    });
  }

  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
