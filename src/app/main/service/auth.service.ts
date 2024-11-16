import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../api/token';
import { User } from '../api/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseUrlApi;
  private readonly tokenPropertyName = 'access_token';
  private readonly tokenExpirationTimestampPropertyName = 'token_expiration_timestamp';
  private readonly loggedUserPropertyName = 'logged_user'

  constructor(private http: HttpClient) { }

  // retorna o cookie de autenticação
  get token (): string {
    return localStorage.getItem(this.tokenPropertyName) ?? '';
  }

  private get user(): User {
    return JSON.parse(localStorage.getItem(this.loggedUserPropertyName));
  }

  get user_id(): number {
    return this.user?.id ?? 0;
  }

  private get tokenExpirationTimestamp(): number {
    return parseInt(localStorage.getItem(this.tokenExpirationTimestampPropertyName)) ?? 0;
  }

  tokenIsExpired(): boolean {
    if (!this.tokenExpirationTimestamp) {
      return true;
    }

    const currentDate = new Date();
    const expirationDate = new Date(this.tokenExpirationTimestamp);

    if (currentDate >= expirationDate) {
      return true;
    }

    return false;
  }

  login (user: User): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/login`, user)
      .pipe(
        tap((res: Token) => {
          const currentDate = new Date();
          const expirationTimestamp = currentDate.getTime() + (res.expires_in * 1000);

          localStorage.setItem(this.tokenPropertyName, res.access_token);
          localStorage.setItem(this.tokenExpirationTimestampPropertyName, expirationTimestamp.toString());

          this.me().subscribe();
        })
      );
  }

  logout (): Observable<void | Object> {
    return this.http.post(`${this.baseUrl}/logout`, {})
      .pipe(
        tap({
          next: () => this.clearAuthData(),
          error: () => this.clearAuthData()
        })
      );
  }

  me(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`).pipe(
      tap((res: User) => {
        localStorage.setItem(this.loggedUserPropertyName, JSON.stringify(res));
      })
    );
  }

  clearAuthData(): void {
    localStorage.removeItem(this.tokenPropertyName);
    localStorage.removeItem(this.loggedUserPropertyName);
    localStorage.removeItem(this.tokenExpirationTimestampPropertyName)
  }
}
