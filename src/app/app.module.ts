import { ServerErrorComponent } from './shared/server-error/server-error.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
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
import { BucketlistService } from './services/bucketlist/bucketlist.service';
import { ItemsService } from './services/item/items.service';
import { ItemsComponent } from './items/items.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateBucketComponent } from './update-bucket/update-bucket.component';
import { CreateBucketlistComponent } from './create-bucketlist/create-bucketlist.component';
import { RegisterService } from './services/register/register.service';
import { SearchComponent } from './search/search.component';
import { AuthenticateService } from './services/authenticate/authenticate.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './services/navbar/navbar.service';
import { FooterComponent } from './footer/footer.component';
import { UnauthorisedComponent } from './shared/Unauthorised/unauthorised.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    TilesComponent,
    LoginComponent,
    SignupComponent,
    ItemsComponent,
    CreateItemComponent,
    UpdateBucketComponent,
    CreateBucketlistComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    UnauthorisedComponent, PageNotFoundComponent, ServerErrorComponent
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
            ItemsService,
            RegisterService,
            AuthenticateService,
            NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
