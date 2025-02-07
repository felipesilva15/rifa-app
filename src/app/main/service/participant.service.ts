import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Participant } from '../api/participant';
import { Observable } from 'rxjs';
import { Ticket } from '../api/ticket';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private readonly baseUrl = environment.baseUrlApi + '/participant';

  constructor(private http: HttpClient) { }

  create(data: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.baseUrl}`, data);
  }

  update(data: Participant, id: number): Observable<Participant> {
    return this.http.put<Participant>(`${this.baseUrl}/${id}`, data);
  }

  get(id: number): Observable<Participant> {
    return this.http.get<Participant>(`${this.baseUrl}/${id}`);
  }

  list(): Observable<Participant[]> {
    return this.http.get<Participant[]>(`${this.baseUrl}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  listTickets(participantId: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/${participantId}/tickets`);
  }
}
