import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  product: IProduct = {
    name: "",
    price: 0

  }
  constructor(private productService: ProductService, private param: ActivatedRoute, private router: Router) {
    this.param.paramMap.subscribe(data => {
      const id = String(data.get('id'));
      this.productService.getOne(id).subscribe(data => {
        this.product = data
      })
    })

  }
  HandleAdd() {
    this.productService.add(this.product).subscribe(data => {
      this.router.navigate(['/admin/product'])
    })
  }
}
