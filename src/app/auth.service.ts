import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { UserProfile } from '../app/models/user-profile';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any = {};

  private _loginUrl = 'http://localhost:8000/user/Login';
  private _forgetPasswordUrl = 'http://localhost:8000/user/forgotpassword';
  private _putUrl = 'http://localhost:8000/user/EditUser/';
  private _getImage = 'http://localhost:8000/user/profile/';
  private profiles: UserProfile[] = [];
  private profiles$ = new Subject<UserProfile[]>();

  constructor(private http: HttpClient) {}

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user);
  }

  addUser(user: any) {
    return this.http.post<any>('http://localhost:8000/user/AddUser', user);
  }
  sendEmail(email: any) {
    return this.http.post<any>(this._forgetPasswordUrl, email);
  }

  empLoggedIn() {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.userData.position == 'employee') {
      return true;
    }
    return false;
  }

  mngLoggedIn() {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.userData.position == 'manager') {
      return true;
    }
    return false;
  }

  TransportMngLoggedIn() {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.userData.position == 'transporter') {
      return true;
    }
    return false;
  }

  updateUserDetails(user: any) {
    let body = new HttpParams()
      .set('firstName', user.firstName)
      .set('lastName', user.lastName)
      .set('email', user.email)
      .set('position', user.position)
      .set('department', user.department)
      .set('supervisorName', user.supervisorName)
      .set('mobile', user.mobile);
    console.log(user + 'user in auth');
    return this.http.put<any>(`${this._putUrl}${user._id}`, body.toString(), {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }

  uploadImage(id : string,image: File): void {
    const profileData = new FormData();

    profileData.append('image', image);
    this.http
      .put<{ profile: UserProfile }>('http://localhost:8000/user/EditUserImage/'+id ,profileData)
      .subscribe((profileData) => {
        const profile: UserProfile = {
          image: profileData.profile.image,
        };
        this.profiles.push(profile);
        this.profiles$.next(this.profiles);
      });
  }


  getUserImageById(id :any){
    return this.http.get<any>(`${this._getImage}${id}`)
  }
}
