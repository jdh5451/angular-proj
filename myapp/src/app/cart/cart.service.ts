import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class CartService {

    products = []
    subject = new Subject<Array<{title:string, category: string, price: number, favorite:boolean}>>()

    getCart(){
        console.log('getting products...')
        return this.products
    }

    getTotal(){
        let price:number=0
        this.products.forEach(prod=>{
            price+=prod.price
        })
        return price;
    }

    addProduct(prod){
        this.products.push(prod)
        this.subject.next(this.products)
    }

    deleteProduct(title:string){
        this.products = this.products.filter(product => product.title !== title)
        this.subject.next(this.products)
    }
}