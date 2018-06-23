import {RouterModule, Routes} from '@angular/router'; 
import { HomeComponent } from './home/home.component';
import { PizzaComponent } from './pizza/pizza.component';
import { CoustomizeComponent } from './coustomize/coustomize.component';
const APP_ROUTES : Routes =[
   {path:'', component:HomeComponent},
   {path:'pizza',component:PizzaComponent},
   {path:'coust',component:CoustomizeComponent}
] ;
export const routing = RouterModule.forRoot(APP_ROUTES);