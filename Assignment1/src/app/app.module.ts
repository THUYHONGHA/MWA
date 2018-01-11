import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent} from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import { WarningComponent } from './warningalert/warningalert.component';


@NgModule({
  declarations: [
    AppComponent, ServerComponent, SuccessalertComponent, WarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
