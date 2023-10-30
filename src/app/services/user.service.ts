import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LoginData } from '../models/login-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlApi = 'http://localhost:3000/api/auth';
  constructor(private http: HttpClient) {}

  login(user: User): Observable<LoginData> {
    return this.http.post<LoginData>(`${this.urlApi}/login`, user);
  }
}
