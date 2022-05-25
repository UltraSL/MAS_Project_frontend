import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/services/request.service';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  title: string = 'AGM project';

  userAddressFrom: string = '';
  userAddressTo: string = '';

  userLatitude0: any = 7.2;
  userLongitude0: any = 80;

  userLatitude: any = {};
  userLongitude: any = {};

  userLatitude1: any = {};
  userLongitude1: any = {};

  address: any = {};
  geoCoder: any = {};

  markerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];
  display?: google.maps.LatLngLiteral;
  zoom: number = 12;
  markers: any = {};
  distance: any;
  empRequest: any = {};
  userData: any = {};
  dir: any = {};

  // initial center position for the map
  latitude: number = 7.448153415867239;
  longitude: number = 80.72284109804686;

  constructor(private _request: RequestService, private _router: Router) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    this.setCurrentLocation();
  }

  From(address: any) {
    this.userAddressFrom = address.formatted_address;
    this.userLatitude = address.geometry.location.lat();
    this.userLongitude = address.geometry.location.lng();
    this.markerPositions.push({
      lat: this.userLatitude,
      lng: this.userLongitude,
    });
    console.log(this.userAddressFrom);
    console.log(this.userLatitude, this.userLongitude);
  }

  To(address: any) {
    this.userAddressTo = address.formatted_address;
    this.userLatitude1 = address.geometry.location.lat();
    this.userLongitude1 = address.geometry.location.lng();
    this.markerPositions.push({
      lat: this.userLatitude1,
      lng: this.userLongitude1,
    });
    console.log(this.userAddressTo);
    console.log(this.userLatitude1, this.userLongitude1);
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;

        this.markerPositions.push({
          lat: this.userLatitude0,
          lng: this.userLongitude0,
        });
      });
    }
  }

  mapClicked(event: MouseEvent) {
    this.markerPositions.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
    });
    console.log(this.markerPositions);
  }

  removeLastMarker() {
    this.markerPositions.pop();
  }

  sendRequest() {
    this.empRequest.user_id = this.userData._id;
    this.empRequest.username = this.userData.username;
    this.empRequest.managerUserName = this.userData.supervisorName;
    this._request.sendRequest(this.empRequest).subscribe({
      complete: () => {
        window.alert('Success'), this._router.navigate(['/statusrequest']);
      },
      error: () => {
        console.log('Error');
      },
    });
  }

  getDirection() {
    this.dir = {
      origin: { lat: this.userLatitude, lng: this.userLongitude },
      destination: { lat: this.userLatitude1, lng: this.userLongitude1 },
      travelMode: 'DRIVING',
      provideRouteAlternatives: true,
    };
  }

  calculateDistance() {
    const A = new google.maps.LatLng(this.userLatitude, this.userLongitude);
    const B = new google.maps.LatLng(this.userLatitude1, this.userLongitude1);
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
      A,
      B
    );
    console.log(distance / 800);
  }
}
