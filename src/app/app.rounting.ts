import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {homeComponent} from './component/home.component';
import {insertComponent} from './component/insert.component';
import {alquilerComponent} from './component/alquiler.component';
import {listComponent} from './component/list.component';
import {profileComponent} from './component/profile.component';

const appRoutes: Routes = [
    {path:'', component:homeComponent},
    {path:'home', component:homeComponent},
    {path:'insert', component:insertComponent},
    {path:'alquiler', component:alquilerComponent},
    {path:'list', component:listComponent},
    {path:'profile', component:profileComponent},
    {path:'**', component:homeComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


