import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ApodComponent} from './controllers/apod.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFormComponent} from './controllers/angular-form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [  // adding components here
    AppComponent, MainNavComponent, ApodComponent, AngularFormComponent
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // what is the root component
})
export class AppModule {
}
