import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  userData : any = {}
  role : any = {}
  notifications: any = {}
  message : any = {}
    constructor(public _auth : AuthService, private _request : RequestService) {}

    ngOnInit(): void {
      this.userData = JSON.parse(localStorage.getItem('user') || '{}');
      this.role= this.userData.position;
      console.log("dammika - "+this.role)
      if(this.role=="employee"){
        this._request.getAllRequestsByUserAndApprovedOrReject(this.userData.username).subscribe((res: any)=> {
          this.notifications=res;
          if(this.notifications.length){
            this.message ="Your Request is ";
          }
        })
      }else if(this.role=="manager"){
        this._request.getRequestByManagerUserNameAndPending(this.userData.username).subscribe((res: any)=> {
          this.notifications=res;
          if(this.notifications.length){
            this.message ="You Have a pending Request";
          }
        })
      }else if(this.role=="driver"){
        this._request.getAllRequestsByAssignedDriver(this.userData.username).subscribe((res: any)=> {
          this.notifications=res;
          if(this.notifications.length){
            this.message ="You are assigned to a new request";
          }
        })
      }
    }

    
}
