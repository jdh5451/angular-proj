import { Component, OnDestroy, OnInit } from '@angular/core';

import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  template:  `
  <h3>Cart</h3>

  <div *ngFor="let item of products" > 
    <h4 [ngClass]="{favorite:item.favorite}" (click)="onDelete(item.title)">{{item.title}}</h4>
    <p>$ {{item.category}}</p>
    <p>$ {{item.price}}</p>
    <br/>
  </div>

  <h4>Total: $ {{total}}</h4>
  `,
  styles: [`
    
        .favorite{
            background-color: #dff
        }
        

    `]
})
export class CartComponent {
  
  products = []

  status = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Online')
    }, 2000);
  })

  total:number

  service:CartService
  constructor(service:CartService){
    this.service = service
    
    console.log('constructor called')
  }

  ngOnInit(){
    console.log('onInit called')
   this.service.subject.subscribe((data)=>{
    console.log('receiving data from subject')
     this.products = data
     this.total=0;
     this.products.forEach(prod=>{
      this.total+=prod.price
      })
    })
   
    
  }

  onDelete(title:string){
    this.service.deleteProduct(title)
  }
 
}
