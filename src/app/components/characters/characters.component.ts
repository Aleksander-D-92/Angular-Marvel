import {Component, OnDestroy, OnInit} from '@angular/core';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../services/interfaces/characters';
import {Subscription} from 'rxjs';
import {MediaChange, MediaObserver} from '@angular/flex-layout';

@Component({
  selector: 'app-characters',
  template: `
    <app-character-card
      [characters]="characters"
    >
    </app-character-card>
  `
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  deviceXs: boolean;

  constructor(private nasaService: MarvelService,
              ) {
  }

  ngOnInit(): void {
    this.nasaService.getCharacters().subscribe((e) => {
      this.characters = e.data.results;
    });
  }

}
