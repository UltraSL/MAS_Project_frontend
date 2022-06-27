import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmergencyService {

  constructor(private http : HttpClient) { }

  private addEmergency = 'http://localhost:8000/emergency/AddEmergencies';


  submitData(user :any){
    return this.http.post<any>(this.addEmergency, user)
  }

  getAllEmergencies(){
    return this.http.get<any>('http://localhost:8000/emergency/getAllEmergencies')
  }

  deleteEmergency(id : string){
    return this.http.delete<any>('http://localhost:8000/emergency/deleteEmergencyById/'+id)
  }
}
