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
import {AngularFormComponent} from './components/angular-form.component';
import {AppRoutingModule} from './app-routing.module';
import {CharacterCardsComponent} from './components/characters/character-cards.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { CharactersPaginationComponent } from './components/characters/characters-pagination.component';
import { CharacterDetailsComponent } from './components/characters/character-details.component';

@NgModule({
  declarations: [  // adding components here
    AppComponent,
    MainNavComponent,
    CharactersComponent,
    AngularFormComponent,
    CharacterCardsComponent,
    CharactersPaginationComponent,
    CharacterDetailsComponent
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
