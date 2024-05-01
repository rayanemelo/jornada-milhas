import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { UF } from '../types/type';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  private apiUrl: string = environment.API_URL
  private cache$?: Observable<UF[]>;

  constructor(private http: HttpClient) { }

  getUfs() : Observable<UF[]> {
    if (!this.cache$) {
      this.cache$ = this.requestEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$;
  }

  private requestEstados(): Observable<UF[]> {
    return this.http.get<UF[]>(`${this.apiUrl}/estados`);
  }

}
