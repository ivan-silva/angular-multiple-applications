import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ComponentsModule } from './components/components.module';
import { CommonsModule } from '@ctel/commons';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    ComponentsModule,
    CommonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
