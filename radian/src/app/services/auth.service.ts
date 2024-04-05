import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  

  // influeces our behaviour
  private isLoggedIn = new BehaviorSubject<boolean>(false);

  // http url
  private loginUrl = "http://localhost:3000/users/login"

  // login funtion 
  loginUser(email: string, password: string): Observable<Boolean> {

    // make the http request, recieve the response of user info, then save user info to session storage

    return this.http.post<any>(this.loginUrl, { email, password }).pipe(
      tap(response => {
        if (response) {
          // set our session storage
          console.log(response)
          sessionStorage.setItem("user", JSON.stringify(response))
          //login to true
          this.isLoggedIn.next(true)
        }
      })
    )


  }

  // Logout funtion

  logout() {
    sessionStorage.removeItem("user")
    this.isLoggedIn.next(false) // set the state to false
  }

  //returns the logged in user info

  CheckCurrentUSerLogin(): boolean {
    var user = JSON.parse(sessionStorage.getItem("user")!)

    if (user) {
      this.isLoggedIn.next(true)
      return true
    } else {
      this.isLoggedIn.next(false)
      return false
    }
  }

  // Two funtions to: check if a user is logged in and authenticated

  checkIfLoggedIn(): Observable<boolean> {

    this.CheckCurrentUSerLogin()

    return this.isLoggedIn.asObservable()

  }

  isUserAdmin() {
    var user = JSON.parse(sessionStorage.getItem("user")!)

    if (user) {
      if (user.isAdmin == true) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
}
