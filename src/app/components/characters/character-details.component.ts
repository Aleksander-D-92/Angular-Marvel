import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../services/interfaces/characters';

@Component({
  selector: 'app-character-details',
  template: `
    <h1>
      character-details works! {{characterId}}
    </h1>
  `
})
export class CharacterDetailsComponent implements OnInit {
  characterId: string;
  character: Character;

  constructor(private route: ActivatedRoute, private marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.characterId = this.route.snapshot.paramMap.get('id');
    this.marvelService.getCharacterById(this.characterId).subscribe((e) => {
      this.character = e.data.results[0];
      console.log(e.data.results[0]);
    });
  }

}
