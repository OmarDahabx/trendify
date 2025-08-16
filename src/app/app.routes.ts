import { Routes } from '@angular/router';
import { Movies } from './components/trends/movies/movies';
import { Trends } from './components/trends/trends';
import { NotFound } from './components/not-found/not-found';
import { Games } from './components/trends/games/games';
import { Home } from './components/home/home';
import { Products } from './components/trends/products/products';
import { About } from './components/about/about';
import { Services } from './components/cservices/cservices';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    {path:'', redirectTo: 'home' , pathMatch:'full'},
    { path: 'home', component:Home, title: 'Home' },
    {path:'trends',component:Trends , title:'Trends', children:[
        {path:'movies', component:Movies },
        {path:'products', component:Products },
        { path: 'games', component:Games }
    ]},
    { path: 'about', component:About, title: 'About' },
    { path: 'services', component:Services, title: 'Services' },
    { path: 'contact', component:Contact , title: 'Contact' },
    {path:'**' , component:NotFound , title:'Not Found'}
];
