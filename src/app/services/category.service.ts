import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private urlApi = 'http://localhost:3000/api/categories';
  constructor(private http: HttpClient) { }
  
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.urlApi}`);
  }
}
