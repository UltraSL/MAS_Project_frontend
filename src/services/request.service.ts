import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private _sendRequestUrl ="http://localhost:8000/request/sendRequest";
  private _getRequestById ="http://localhost:8000/request/getAllRequestsByUserId/";

  constructor(private http : HttpClient ) { }

  sendRequest(request:any){
    return this.http.post<any>(this._sendRequestUrl, request)
  }

  getRequestsById(id :any){
    return this.http.get<any>(`${this._getRequestById}${id}`)
  }

  
}
