import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Services } from "./components/cservices/cservices";
import { Product } from "./components/product/product";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Movies } from "./components/trends/movies/movies";
import { Trends } from "./components/trends/trends";
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, Services, Product, About, Contact, Footer, Movies, Trends],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit  {
  protected readonly title = signal('trendify');
  ngOnInit(): void {
    initFlowbite();
  }
}
