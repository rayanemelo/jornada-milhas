import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, {
      email: email,
      senha: password,
    });
  }
}
