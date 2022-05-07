import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl ="http://localhost:8000/user/Login";
  private _forgetPasswordUrl ="http://localhost:8000/user/forgotpassword";

  constructor(private http : HttpClient 
  ) { }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  sendEmail(email: any){
    return this.http.post<any>(this._forgetPasswordUrl, email)
  }
}
