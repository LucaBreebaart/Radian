import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private loginUrl = "http://localhost:3000/users/login";

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkCurrentUserLogin();
    }
  }

  loginUser(email: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { email, password }).pipe(
      tap(response => {
        if (response && isPlatformBrowser(this.platformId)) {
          sessionStorage.setItem("user", JSON.stringify(response));
          this.isLoggedIn.next(true);
        }
      })
    );
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem("user");
    }
    this.isLoggedIn.next(false);
  }

  checkCurrentUserLogin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem("user") || 'null');
      if (user) {
        this.isLoggedIn.next(true);
        return true;
      }
    }
    this.isLoggedIn.next(false);
    return false;
  }

  checkIfLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  isUserAdmin(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = JSON.parse(sessionStorage.getItem("user") || 'null');
      return user?.isAdmin === true;
    }
    return false;
  }
}