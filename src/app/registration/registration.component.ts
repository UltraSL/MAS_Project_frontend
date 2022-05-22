import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  submitted = false;
  managerList : any = {}
  department : any = {}
  constructor(private _auth: AuthService, private _router: Router) {}
  


  onOptionsSelected(value: any) {
 
   console.log("value",value);
    this.department = value;
    console.log("de",this.department);

   this._auth.getMngByDept(this.department).subscribe((res: any)=> {
    this.managerList=res,

    console.log(res)
  

  })

  }

  ngOnInit() {
    
  

  }

  form = new FormGroup({
    empNumber: new FormControl('', [Validators.required]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    position: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    
  
    // confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    NICNumber: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
    supervisorName: new FormControl('', [Validators.required]),
   

  
  },


  );
  get f() {
    return this.form.controls;
  }
 
  submit() {
    console.log(this.form.value);
    this._auth.addUser(this.form.value).subscribe(
      (res) => {
        if (
          res.code == 200 &&
          res.success == true &&
          res.message == 'Email already available'
        ) {
          alert(res.message);
          console.log(res);
        }

        if (
          res.code == 200 &&
          res.success == true &&
          res.message == 'Registration Successfully'
        ) {
          alert(res.message);
          console.log(res);
          localStorage.setItem('token', JSON.stringify(res.token));
          localStorage.setItem('user', JSON.stringify(res.data));
          localStorage.setItem('position', JSON.stringify(res.data.position));
          this._router.navigate(['/dashboard']).then(() => {
            window.location.reload();
          });
        }

        if (res.code == 200 && res.success == false) {
          alert(res.message);
        }
      },
      (err) => {
        console.log(err);
        window.alert(err.error);
      }
    );
  }
}
