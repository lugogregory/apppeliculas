import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { homeComponent } from './component/home.component';
import { insertComponent } from './component/insert.component';
import { listComponent } from './component/list.component';
import { profileComponent } from './component/profile.component';
import { alquilerComponent } from './component/alquiler.component';

import {routing, appRoutingProviders} from './app.rounting';

@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    insertComponent,
    listComponent,
    profileComponent,
    alquilerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
