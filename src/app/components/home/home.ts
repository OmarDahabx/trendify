import { Component } from '@angular/core';
import { Services } from "../cservices/cservices";
import { Product } from "../product/product";
import { About } from "../about/about";
import { Contact } from "../contact/contact";

@Component({
  selector: 'app-home',
  imports: [Services, Product, About, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
