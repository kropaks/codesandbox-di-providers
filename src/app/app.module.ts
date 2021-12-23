import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ParentDirective } from "./parent.directive";
import { ChildDirective } from "./child.directive";

@NgModule({
  declarations: [AppComponent, ParentDirective, ChildDirective],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
