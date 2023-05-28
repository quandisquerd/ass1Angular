import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll():Observable <IProduct[]>{
      return this.http.get<IProduct[]>(`http://localhost:3000/product`)
  }
  getOne(id:string|number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/product/${id}`)
  }
  remove(id:string|number): Observable<IProduct> {
    return this.http.delete<IProduct>(`http://localhost:3000/product/${id}`)
  }
  add(pro:IProduct): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`http://localhost:3000/product`,pro)
  }
  edit(pro:IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:3000/product/${pro.id}`,pro)
  }
}
