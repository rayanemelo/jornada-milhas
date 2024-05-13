import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(email: string, password: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/auth/login`, {
      email: email,
      senha: password,
    },
      { observe: 'response' }).pipe(tap(res => {
        const authToken = res.body?.access_token || ''
        this.userService.saveToken(authToken);
      }));
  }
}
