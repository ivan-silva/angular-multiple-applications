import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { View1Component } from "./view1/view1.component";
import { View2Component } from "./view2/view2.component";
import { app1Routes} from "./app-routing.module"

@NgModule({
  imports: [RouterModule.forRoot(app1Routes)],
  exports: [RouterModule]
})
export class StandAloneAppRoutingModule { }

@NgModule({
    declarations: [
      AppComponent,
      View1Component,
      View2Component,
      NavComponent
    ],
    imports: [
      //CommonModule,
      BrowserModule,
      StandAloneAppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class StandAloneAppModule { }