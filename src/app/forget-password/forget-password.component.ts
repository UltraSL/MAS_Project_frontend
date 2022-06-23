import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  email : any = {}
  loginUserData : any = {}
  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this._auth.sendEmail(this.email.email)
    .subscribe(
      res => {
        if (
          res.code == 200 &&
          res.success == false &&
          res.message == 'no user'
        ){
          window.alert("No user")
        }else{
          window.alert("success")
        }
      }
    )
  }
  
 

}
