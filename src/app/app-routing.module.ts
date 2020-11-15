import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from './components/characters/characters.component';
import {CharacterDetailsComponent} from './components/characters/character-details.component';
import {LoginComponent} from './components/users/login.component';
import {RegisterComponent} from './components/users/register.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'character/:id', component: CharacterDetailsComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'users/register', component: RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
