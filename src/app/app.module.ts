import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './services/login/login.service'

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    TilesComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
