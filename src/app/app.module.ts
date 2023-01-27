import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { LoginComponent } from './user/login/login.component';
import { AddressComponent } from './user/address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    LoginComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
