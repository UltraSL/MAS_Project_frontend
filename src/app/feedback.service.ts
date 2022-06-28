
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  private addEmergency = 'http://localhost:8000/feedback/addFeedback';


  submitFeedback(user :any){
    return this.http.post<any>(this.addEmergency, user)
  }

  getAllFeedback(){
    return this.http.get<any>('http://localhost:8000/feedback/getAllFeedbacks')
  }


}