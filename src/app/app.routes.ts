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
import { UpdateItemComponent } from './update-item/update-item.component';
import { UpdateBucketComponent } from './update-bucket/update-bucket.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'bucketlist', component: TilesComponent},
  {path: '404', component: ErrorPagesComponent},
  {path: '', component: LandingpageComponent},
  {path: 'bucket_update/:bucket_id', component: UpdateBucketComponent },
  {path: 'item_update/:bucket_id/:item_id', component: UpdateItemComponent },
  {path: 'bucketlist/:bucketlist_id', component: ItemsComponent },
  {path: '**', redirectTo: '/404'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
