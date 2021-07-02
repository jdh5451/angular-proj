import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ProductService } from "../products/products.service";
import { CartService } from "../cart/cart.service";

@Component({
    selector: 'app-product',
    template: `
        <div>
        <!-- <h4 [ngStyle]="{'display':showHead()}">Product</h4> -->
       <ng-content select='[header]'></ng-content>
        <h4 [ngClass]="{favorite:prod.favorite}">{{prod.title}}</h4>
            {{prod.category }}
            <br/>

            $ {{prod.price}}
            <br/>
            <button (click)="toggleFave()">Favorite</button>
            <button (click)="addToCart()">Add to Cart</button>
            <br/>
            <ng-content select='[footer]'></ng-content>

        </div>
    `,
    styles: [`
    
        .favorite{
            background-color: #dff
        }
        

    `]
})
export class ProductComponent {
    @Input() prod;
    @Output() delete = new EventEmitter<string>()
    saleDate = new Date()

    toggle = 'none'

    

    service:ProductService
    cService:CartService

  constructor(service:ProductService, cService:CartService){
    this.service = service
    this.cService=cService
    console.log('constructor called')
  }

  ngOnInit(){
    console.log('onInit called')
    //call and API and update the products
    //make HTTP request
   //let prod = this.service.getProduct('1')
   //console.log(prod)
  }

  /*ngDoCheck(){
    console.log('doCheck called')
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(){
    console.log('onDestroy called')
  }*/

  toggleFave(){
    this.service.toggleFave(this.prod.title)
}

    addToCart(){
      this.cService.addProduct({title:this.prod.title, category:this.prod.category, price: this.prod.price, favorite: this.prod.favorite})
    }

    showHead(){
        return 'none'
    }
}