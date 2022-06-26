import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from 'src/services/driver.service';
import { RequestService } from 'src/services/request.service';

@Component({
  selector: 'app-driver-view-request',
  templateUrl: './driver-view-request.component.html',
  styleUrls: ['./driver-view-request.component.css'],
})
export class DriverViewRequestComponent implements OnInit {
  searchedRequests: any = {};
  clickedRequestId: any = {};
  updateRequest: any = {};
  userData: any = {};
  updateDriver: any = {};
  btnDisabled = false;

  constructor(
    private request: RequestService,
    private _router: Router,
    private driver: DriverService
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');

    this.request
      .getAllRequestsByDriver(this.userData.username)
      .subscribe((res: any) => {
        (this.searchedRequests = res), console.log(res);
      });
  }

  getId(id: any) {
    this.clickedRequestId = id;
    localStorage.setItem('clickedRequestId', this.clickedRequestId);
    console.log(this.clickedRequestId + ' id of Request');
  }

  approveRejectRequest(id: any, isDriverAccepted: any, distance: any) {
    this.updateRequest._id = id;
    this.updateRequest.isDriverAccepted = isDriverAccepted;
    this.btnDisabled = true;

    if (isDriverAccepted) {
      this.updateDriver.distance = distance;
      this.driver.updateVehicleTotalMilage(this.userData.username,distance).subscribe(
        (res) => {
          this.updateDriver.push = res;
        },
        (err) => {
          console.log(err);
        }
      );
    }
    console.log(this.updateRequest);
    this.request.driverApproveRequestById(this.updateRequest).subscribe(
      (res) => {
        this.updateRequest.push = res;
        window.alert('successfully Updated');
        this._router.navigate(['/driver-view-requests']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
