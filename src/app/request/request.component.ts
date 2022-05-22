import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  empRequest : any = {}
  userData : any = {}

  constructor( private _request : RequestService , private _router : Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

  sendRequest(){
    this.empRequest.user_id= this.userData._id;
    this.empRequest.username= this.userData.username;
    this.empRequest.managerUserName = this.userData.supervisorName;
    this._request.sendRequest(this.empRequest)
    .subscribe({
      complete: () => { window.alert("Success"), this._router.navigate(['/statusrequest']) }, // completeHandler
      error: () => { console.log("Error") },    // errorHandler 
  });
  }

}
