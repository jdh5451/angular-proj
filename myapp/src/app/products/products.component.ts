import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products = []

  status = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Online')
    }, 2000);
  })

  title:string = ''
  category=["All, Electronics, Furniture, Stationery"]
  cat="All"

  service:ProductService

  constructor(service:ProductService){
    this.service = service
    
    console.log('constructor called')
  }

  ngOnInit(){
    console.log('onInit called')
   this.service.subject.subscribe((data)=>{
    console.log('receiving data from subject')
     this.products = data
    })
    this.service.addProduct({title:"TV",category:"Electronics", price:1100.00,favorite:false})
    this.service.addProduct({title:"Chair",category:"Furniture", price:300.00,favorite:false})
    this.service.addProduct({title:"Desk",category:"Furniture", price:800.00,favorite:false})
    this.service.addProduct({title:"Paper",category:"Stationery", price:10.00,favorite:false})
    this.service.addProduct({title:"Printer",category:"Electronics", price:700.00,favorite:false})
    //call and API and update the products
    //make HTTP request
  }

  ngDoCheck(){
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
  }

  updateTitle(e:Event){
    this.title = (<HTMLInputElement> e.target).value
  }

  onAdd(){
    this.service.addProduct({title:this.title, category:this.category})
  }

  filter(e){
    this.products= this.service.filter(e.target.value)
  }

  

  // showAll:boolean = true
  // signal:string = 'YELLOW'

  // toggle(){
  //   this.showAll = !this.showAll
  // }

  onDelete(title:string){
    this.service.deleteProduct(title)
  }
 
}
