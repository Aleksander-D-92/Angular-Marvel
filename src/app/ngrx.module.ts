import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {reducer} from './testing/ngrx-test/tutorial.reducer';


@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({tutorial: reducer})],
  exports: [StoreModule]
})

export class NgrxModule {
}
