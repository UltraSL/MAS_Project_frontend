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
  private _putUrl ="http://localhost:8000/user/EditUser/";

  constructor(private http : HttpClient 
  ) { }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  addUser(user: any) {
    return this.http.post<any>("http://localhost:8000/user/AddUser", user)
  }
  sendEmail(email: any){
    return this.http.post<any>(this._forgetPasswordUrl, email)
  }


  updateUserDetails(user : any){
    let body = new HttpParams()
    .set('firstName', user.firstName)
    .set('lastName', user.lastName)
    .set('email', user.email)
    .set('position', user.position)
    .set('department', user.department)
    .set('supervisorName', user.supervisorName)
    .set('mobile', user.mobile);
    console.log(user+"user in auth")
    return this.http.put<any>(`${this._putUrl}${user._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

}
