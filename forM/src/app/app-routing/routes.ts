import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import{Form1Component} from '../form1/form1.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: Form1Component},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]
