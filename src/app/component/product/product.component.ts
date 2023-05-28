import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
products :IProduct[] =[]
constructor (private productService:ProductService){
  this.productService.getAll().subscribe(data=>{
    this.products = data
  })
}
}
