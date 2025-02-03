import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DashboardData } from '../api/dashboard-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly baseUrl = environment.baseUrlApi + '/dashboard';

  constructor(private http: HttpClient) { }

  getDataHome(): Observable<DashboardData> {
    return this.http.get<DashboardData>(`${this.baseUrl}/home`);
  }
}
