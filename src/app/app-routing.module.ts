import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from './components/characters/characters.component';
import {CharacterDetailsComponent} from './components/characters/character-details.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'character/:id', component: CharacterDetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
