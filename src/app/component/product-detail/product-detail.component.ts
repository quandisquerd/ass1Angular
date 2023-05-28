import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
product:IProduct ={
  name:"",
  price:0

}
constructor (private productService:ProductService , private param:ActivatedRoute){
  this.param.paramMap.subscribe(data=>{
    const id = String(data.get('id'));
    this.productService.getOne(id).subscribe(data => {
      this.product = data
    })
  })
 
}
}
