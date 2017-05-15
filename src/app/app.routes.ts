/**
 * Created by eugeneliyai on 02/05/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { TilesComponent } from './tiles/tiles.component';
import { ItemsComponent } from './items/items.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateBucketComponent } from './update-bucket/update-bucket.component';
import { CreateBucketlistComponent } from './create-bucketlist/create-bucketlist.component';
import { SearchComponent } from './search/search.component';
import { AuthenticateService } from './services/authenticate/authenticate.service';
import { ServerErrorComponent } from './shared/server-error/server-error.component';
import { UnauthorisedComponent } from './shared/Unauthorised/unauthorised.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bucketlist', component: TilesComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '', component: LandingpageComponent},
  {path: 'create_bucketlist', component: CreateBucketlistComponent },
  {path: 'search', component: SearchComponent },
  {path: 'bucket_update/:bucket_id', component: UpdateBucketComponent },
  {path: 'create_item/:bucket_id', component: CreateItemComponent },
  {path: 'bucketlist/:bucketlist_id', component: ItemsComponent },
  {path: 'bucketlist/:bucketlist_id/page/:page_no', component: ItemsComponent },
  {path: '500', component: ServerErrorComponent},
  {path: '401', component: UnauthorisedComponent},
  {path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
