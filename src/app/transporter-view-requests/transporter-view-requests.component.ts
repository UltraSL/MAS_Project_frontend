import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/services/request.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-transporter-view-requests',
  templateUrl: './transporter-view-requests.component.html',
  styleUrls: ['./transporter-view-requests.component.css']
})
export class TransporterViewRequestsComponent implements OnInit {
  userData : any = {}
  searchedRequests : any = {}
  clickedRequestId : any = {}

  constructor( private request : RequestService, public _auth : AuthService) { }

  ngOnInit(): void {
    this.request.getAllrequests().subscribe((res: any)=> {
      this.searchedRequests=res,
      console.log(res)
    })
  }

  getId(id : any){
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId+" id of Request");
  }

}
