import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ShortenPipe } from './shorten.pipe';
import { ProductService } from './products/products.service';
import { CartService } from './cart/cart.service';
import { ObservSampleComponent } from './obsersample.component';
import { ProductListComponent } from './products/list.component';


@NgModule({
  declarations: [ //Component,Pipe,Directive
    AppComponent,
    ProductComponent,
    ProductsComponent,
    CartComponent,
    ObservSampleComponent,
    ProductListComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
