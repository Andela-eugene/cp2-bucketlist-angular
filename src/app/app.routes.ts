/**
 * Created by eugeneliyai on 02/05/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component'

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LandingpageComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)
