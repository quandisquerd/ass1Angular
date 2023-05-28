import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashbordComponent } from './component/admin/dashbord/dashbord.component';
import { EditComponent } from './component/admin/edit/edit.component';
import { AddComponent } from './component/admin/add/add.component';
import { ListProductComponent } from './component/admin/list-product/list-product.component';

const routes: Routes = [
  {
    "path":'',component: BaseLayoutComponent ,children:[
      {path: '', component:HomeComponent },
      { path: 'product', component: ProductComponent },
      { path: 'product/:id', component: ProductDetailComponent },
    ]
  },
  {
    "path": 'admin', component: AdminLayoutComponent, children: [
      { path: '',redirectTo:"dashbord" , pathMatch:"full"},
      { path: 'dashbord', component: DashbordComponent },
      { path: 'product', component: ListProductComponent },
      { path: 'product/:id/edit', component: EditComponent },
      { path: 'product/add', component: AddComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
