import { User } from './../api/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = environment.baseUrlApi + '/user';

  constructor(private http: HttpClient) { }

  get (id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  list (): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  resetPassword(email: string): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/reset_password`, { email: email });
  }
}
