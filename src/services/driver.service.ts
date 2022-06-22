import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private _addDriverUrl ="http://localhost:8000/driver/addDriver";
  private _getAllDrivers ="http://localhost:8000/driver/getAllDrivers";
  private _getAllAvailableDrivers ="http://localhost:8000/driver/getAvailableDrivers/";
  private _updateVehicleTotalMilage ="http://localhost:8000/driver/updateVehicleTotalMilageByUsername/";
 
  constructor(private http : HttpClient) { }

  sendDriver(driver :any){
    return this.http.post<any>(this._addDriverUrl, driver)
  }

  getAlldrivers(){
    return this.http.get<any>(this._getAllDrivers)
  }

  getAllAvailabledrivers(date : any){
    return this.http.get<any>(`${this._getAllAvailableDrivers}${date}`)
  }

  /*updateVehicleTotalMilage(username: any) {
    return this.http.put('http://localhost:8000/driver/updateVehicleTotalMilageByUsername/'+username, {});
  }*/



  updateVehicleTotalMilage(username : any,distance : any){
    let body = new HttpParams()
    .set('distance', distance);
    return this.http.put<any>(`${this._updateVehicleTotalMilage}${username}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }








}
