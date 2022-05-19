import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/services/driver.service';
import { RequestService } from 'src/services/request.service';
import { VehicleService } from 'src/services/vehicle.service';
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
  driverList : any = {}
  vehicleList : any = {}

  constructor( private request : RequestService, public _auth : AuthService, private _driver : DriverService,
    private _vehicle : VehicleService) { }

  ngOnInit(): void {
    this.request.getRequestsByStatus("approved").subscribe((res: any)=> {
      this.searchedRequests=res,
      console.log(res)
    })

    this._driver.getAlldrivers().subscribe((res: any)=> {
      this.driverList=res,
      console.log(res)
    })

    this._vehicle.getAllVehicles().subscribe((res: any)=> {
      this.vehicleList=res,
      console.log(res)
    })
  }

  getId(id : any){
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId+" id of Request");
  }

  assign(id:any, date : any, driverName:any, vehicleNumber:any){
    
  }

}
