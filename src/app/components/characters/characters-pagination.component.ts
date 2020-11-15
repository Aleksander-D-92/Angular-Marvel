import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginationOptions} from '../../services/interfaces/base-response';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-characters-pagination',
  template: `
    <div fxLayout="row" fxLayoutAlign="center center">
      <mat-paginator class="mt-3"
                     fxFlex="99"
                     [length]="pagination.total"
                     [pageSize]="pagination.count"
                     [pageSizeOptions]="[12]"
                     (page)="setCurrentPage($event)">
      </mat-paginator>
    </div>
  `,
  styles: []
})
export class CharactersPaginationComponent {
  @Input() pagination: PaginationOptions;
  @Output() pageEvent = new EventEmitter<PageEvent>();

  setCurrentPage(pageEvent: PageEvent): void {
    this.pageEvent.emit(pageEvent);
  }
}
