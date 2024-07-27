import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl:string = "https://fakestoreapi.com/products"
  constructor(private http:HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }
}
