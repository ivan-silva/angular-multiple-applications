import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {App2SharedModule} from '../../projects/app2/src/app/app.module';
import {App1SharedModule} from '../../projects/app1/src/app/app.module';
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
