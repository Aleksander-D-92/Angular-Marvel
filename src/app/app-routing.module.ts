import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApodComponent} from './components/apod/apod.component';

const routes: Routes = [
  {path: 'apod', component: ApodComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
