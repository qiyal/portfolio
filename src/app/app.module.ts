import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/shared/header/header.component';
import {AboutModule} from './core/layout/about/about.module';
import { CircleDiagramComponent } from './core/shared/circle-diagram/circle-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CircleDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
