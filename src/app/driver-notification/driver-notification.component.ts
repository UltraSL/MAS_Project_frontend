import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-driver-notification',
  templateUrl: './driver-notification.component.html',
  styleUrls: ['./driver-notification.component.css']
})
export class DriverNotificationComponent implements OnInit {

  constructor(private _request : RequestService) { }

  notifications : any = {}
  userData : any = {}
  message : any = {}

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this._request.getAllRequestsByAssignedDriver(this.userData.username).subscribe((res: any)=> {
      this.notifications=res;
      if(this.notifications.length){
        this.message ="You are assigned to a new request";
      }
      console.log(res)
    })
  }

}
