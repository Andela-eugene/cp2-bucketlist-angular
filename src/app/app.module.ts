import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { TilesComponent } from './tiles/tiles.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routes';
import { SignupComponent } from './signup/signup.component';
import { LoginService } from './services/login/login.service';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { BucketlistService } from './services/bucketlist/bucketlist.service';
import { ItemsService } from './services/item/items.service';
import { ItemsComponent } from './items/items.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { UpdateBucketComponent } from './update-bucket/update-bucket.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    TilesComponent,
    LoginComponent,
    SignupComponent,
    ErrorPagesComponent,
    ItemsComponent,
    UpdateItemComponent,
    UpdateBucketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [ LoginService,
            BucketlistService,
            ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
