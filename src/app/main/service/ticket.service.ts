import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ticket } from '../api/ticket';
import { Observable } from 'rxjs';
import { TicketResource } from '../api/ticketResource';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private readonly baseUrl = environment.baseUrlApi + '/ticket';

  constructor(private http: HttpClient) { }

  create(data: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${this.baseUrl}`, data);
  }

  update(data: Ticket, id: number): Observable<Ticket> {
    return this.http.put<Ticket>(`${this.baseUrl}/${id}`, data);
  }

  get (id: number): Observable<TicketResource> {
    return this.http.get<TicketResource>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<TicketResource[]> {
    return this.http.get<TicketResource[]>(`${this.baseUrl}`);
  }

  delete (id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
