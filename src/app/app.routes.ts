import { Routes } from '@angular/router';
import { Movies } from './components/trends/movies/movies';
import { Trends } from './components/trends/trends';
import { NotFound } from './components/not-found/not-found';
import { Games } from './components/trends/games/games';
import { Home } from './components/home/home';
import { Products } from './components/trends/products/products';

export const routes: Routes = [
    {path:'', redirectTo: 'home' , pathMatch:'full'},
    { path: 'home', component:Home, title: 'Home' },
    {path:'trends',component:Trends , title:'Trends', children:[
        {path:'movies', component:Movies },
        {path:'products', component:Products },
        { path: 'games', component:Games }
    ]},
    {path:'**' , component:NotFound , title:'Not Found'}
];
