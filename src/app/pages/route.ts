import { Route } from '@angular/router';
import { PagesComponent } from './pages.component';


export const ROUTES :Route[] = [
  {
    path: '',
    component: PagesComponent,
   children:[
   
    {
      path:'range',
      loadComponent: () => import('./range-standalone/range-standalone.component').then(mod => mod.RangeStandaloneComponent),
    }
    ,
    {
      path:'table',
      loadComponent: () => import('./table-standalone/table-standalone.component').then(mod => mod.TableStandaloneComponent),
    },
    {
      path:'float',
      loadComponent: () => import('./float-standalone/floating-labels-standalone.component').then(mod => mod.FloatingLabelsStandaloneComponent),
    }
    ,
    {
      path:'button',
      loadComponent: () => import('./button-standalone/button-standalone/button-standalone.component').then(mod => mod.ButtonStandaloneComponent),
    }
    ,
    {
      path:'inputgroup',
      loadComponent: () => import('./input-group/input-group-standalone.component').then(mod => mod.InputGroupStandaloneComponent),
    }
   ]
 
 
},
];