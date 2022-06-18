import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-employee-notification',
  templateUrl: './employee-notification.component.html',
  styleUrls: ['./employee-notification.component.css']
})
export class EmployeeNotificationComponent implements OnInit {

  notifications : any = {}
  userData : any = {}
  message : any = {}

  constructor(private _request : RequestService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this._request.getAllRequestsByUserAndApprovedOrReject(this.userData.username).subscribe((res: any)=> {
      this.notifications=res;
      if(this.notifications.length){
        this.message ="Your Request is ";
      }
      console.log(res)
    })
  }

}
