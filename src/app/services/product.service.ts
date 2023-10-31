import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { NewProduct } from '../models/new-product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private urlApi = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  createProduct(newProduct: NewProduct): Observable<Product> {
    const headers = this.setHeaders();

    return this.http.post<Product>(`${this.urlApi}`, newProduct, {
      headers,
    });
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}`);
  }

  getOneProductById(product_id: number): Observable<Product> {
    return this.http.get<Product>(`${this.urlApi}/${product_id}`);
  }

  updateProduct(product_id: number, updateProduct: NewProduct): Observable<Product> {
    const headers = this.setHeaders();
    return this.http.patch<Product>(`${this.urlApi}/${product_id}`, updateProduct, {headers});
  }

  deleteProduct(product_id: number): Observable<Product> {
    const headers = this.setHeaders();
    return this.http.delete<Product>(`${this.urlApi}/${product_id}`,{ headers });
  }
}
