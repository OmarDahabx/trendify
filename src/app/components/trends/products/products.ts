import { Component, inject } from '@angular/core';
import { Sproducts } from '../../../services/sproducts';
import { Iproducts } from '../../../interfaces/iproducts';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  private readonly sproducts = inject(Sproducts);
  prodcutsItems:Iproducts[]=[]

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.sproducts.getProductsData().subscribe({
      next:(res)=>{
        this.prodcutsItems = res;
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
