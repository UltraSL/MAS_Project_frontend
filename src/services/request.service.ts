import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _sendRequestUrl ="http://localhost:8000/request/sendRequest";
  private _getRequestByUserId ="http://localhost:8000/request/getAllRequestsByUserId/";
  private _getRequestsByStatus ="http://localhost:8000/request/getAllRequestsByStatus/";
  private _getRequestById ="http://localhost:8000/request/getRequestById/";
  private _getAllRequests ="http://localhost:8000/request/getAllRequests";
  private _approveRejectRequestById ="http://localhost:8000/request/approveRejectRequestById/";

  constructor(private http : HttpClient ) { }

  sendRequest(request:any){
    return this.http.post<any>(this._sendRequestUrl, request)
  }

  getRequestsById(id :any){
    return this.http.get<any>(`${this._getRequestByUserId}${id}`)
  }

  getRequestsByStatus(status :any){
    return this.http.get<any>(`${this._getRequestsByStatus}${status}`)
  }

  getAllrequests(){
    return this.http.get<any>(this._getAllRequests)
  }

  getRequestById(id :any){
    return this.http.get<any>(`${this._getRequestById}${id}`)
  }

  approveRejectRequestById(request : any){
    let body = new HttpParams()
    .set('status', request.status);
    return this.http.put<any>(`${this._approveRejectRequestById}${request._id}`, body.toString(),{
      headers: new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  
}
