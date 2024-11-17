import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Raffle } from '../api/raffle';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaffleService {
  private readonly baseUrl = environment.baseUrlApi + '/raffle';

  constructor(private http: HttpClient) { }

  create(data: Raffle): Observable<Raffle> {
    return this.http.post<Raffle>(`${this.baseUrl}`, data);
  }

  update(data: Raffle, id: number): Observable<Raffle> {
    return this.http.put<Raffle>(`${this.baseUrl}/${id}`, data);
  }

  get (id: number): Observable<Raffle> {
    return this.http.get<Raffle>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<Raffle[]> {
    return this.http.get<Raffle[]>(`${this.baseUrl}`);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
