import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  userData : any = {}
  notifications : any = {}
  message : any = {}

  constructor(private _request: RequestService) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this._request.getRequestByManagerUserNameAndPending(this.userData.username).subscribe((res: any)=> {
      this.notifications=res;
      if(this.notifications.length){
        this.message ="You Have a pending Request";
      }
      console.log(res)
    })

  }

}
