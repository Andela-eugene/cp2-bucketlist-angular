/**
 * Created by eugeneliyai on 02/05/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { TilesComponent } from './tiles/tiles.component';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { ItemsComponent } from './items/items.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { UpdateBucketComponent } from './update-bucket/update-bucket.component';
import { CreateBucketlistComponent } from './create-bucketlist/create-bucketlist.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bucketlist', component: TilesComponent},
  {path: '404', component: ErrorPagesComponent},
  {path: '', component: LandingpageComponent},
  {path: 'create_bucketlist', component: CreateBucketlistComponent },
  {path: 'bucket_update/:bucket_id', component: UpdateBucketComponent },
  {path: 'create_item/:bucket_id', component: CreateItemComponent },
  {path: 'bucketlist/:bucketlist_id', component: ItemsComponent },
  {path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
