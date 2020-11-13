import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ApodComponent} from './components/apod/apod.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFormComponent} from './components/angular-form.component';
import { AppRoutingModule } from './app-routing.module';
import { ApodDescriptionComponent } from './components/apod/apod-description.component';

@NgModule({
  declarations: [  // adding components here
    AppComponent, MainNavComponent, ApodComponent, AngularFormComponent, ApodDescriptionComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent] // what is the root component
})
export class AppModule {
}
