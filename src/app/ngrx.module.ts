import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {tutorialReducers} from './testing/ngrx-test/reducers';


@NgModule({
  declarations: [],
  imports: [StoreModule.forRoot({tutorial: tutorialReducers})],
  exports: [StoreModule]
})

export class NgrxModule {
}
