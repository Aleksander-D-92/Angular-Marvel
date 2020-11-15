import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {CharactersComponent} from './components/characters/characters.component';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {CharacterCardsComponent} from './components/characters/character-cards.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CharactersPaginationComponent} from './components/characters/characters-pagination.component';
import {CharacterDetailsComponent} from './components/characters/character-details.component';
import {LoginComponent} from './components/users/login.component';
import {RegisterComponent} from './components/users/register.component';
import {MainNavUserMenuComponent} from './components/main-nav/main-nav-user-menu.component';

@NgModule({
  declarations: [  // adding components here
    AppComponent,
    MainNavComponent,
    CharactersComponent,
    CharacterCardsComponent,
    CharactersPaginationComponent,
    CharacterDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MainNavUserMenuComponent
  ],
  imports: [ // importing other modules
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent] // what is the root component
})
export class AppModule {
}
