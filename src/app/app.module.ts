import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAgeComponent } from './src/user-age/user-age.component';
import { UserColoursComponent } from './src/user-colours/user-colours.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAgeComponent,
    UserColoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
