import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../../services/marvel.service';
import {Character} from '../../services/interfaces/characters';
import {PaginationOptions} from '../../services/interfaces/base-response';
import {PageEvent} from '@angular/material/paginator';
import {Size} from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-characters',
  template: `
    <app-loading-screen [size]="size" [loading]="characters === undefined"></app-loading-screen>
    <app-character-card [characters]="characters">
    </app-character-card>
    <app-characters-pagination [pagination]="pagination" (pageEvent)="onPageChange($event)">
    </app-characters-pagination>
  `
})
export class CharactersComponent implements OnInit {
  characters: Character[];
  pagination: PaginationOptions;
  size = Size.large;

  constructor(private marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.marvelService.getCharacters().subscribe((e) => {
      this.characters = e.data.results;
      this.pagination = {
        count: e.data.count,
        limit: e.data.limit,
        offset: e.data.offset,
        total: e.data.total
      };
    });
  }

  onPageChange(pageEvent: PageEvent): void {
    const offset = pageEvent.pageIndex * pageEvent.pageSize;
    this.marvelService.getCharactersPage(offset).subscribe((e) => {
      this.characters = e.data.results;
    });
  }

}
