import { Injectable } from "@angular/core"
import { Subject } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    products = []
    subject = new Subject<Array<{title:string, category: string, price: number, favorite:boolean}>>()

    getProducts() {
        console.log('getting products...')
        return this.products
    }

    getProduct(id){
        return {title:'Some Product'}
    }

    toggleFave(title){
        console.log(title)
        this.products.forEach(prod => {
            if(prod.title === title) {
                prod.favorite = !prod.favorite
            }
        })
    }

    filter(cat){
        if(cat==="All") return this.products;
        return this.products.filter(prod=>prod.category === cat)
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