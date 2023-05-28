import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent {
  products: IProduct[] = []
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe(data => {
      this.products = data
    })
  }
  HandleRemove(id:any){
    this.productService.remove(id).subscribe(data=>{
      this.products = this.products.filter(c=>c.id != id)
    })
  }
}
