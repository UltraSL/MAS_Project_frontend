import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private _addVehicleUrl ="http://localhost:8000/vehicle/addVehicle";
  private _getAllVehicles ="http://localhost:8000/vehicle/getAllVehicles";

  constructor(private http : HttpClient) { }

  addVehicle(vehicle :any){
    return this.http.post<any>(this._addVehicleUrl, vehicle)
  }

  getAllVehicles(){
    return this.http.get<any>(this._getAllVehicles)
  }
}
