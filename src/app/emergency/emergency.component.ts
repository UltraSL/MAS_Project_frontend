import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmergencyService } from '../emergency.service';
@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  userData : any = {}
  emergencyData : any = {}

  constructor(private formBuilder: FormBuilder,private emergency :EmergencyService, private _router : Router) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData._id);
  }
  form = this.formBuilder.group({
    user_id : new FormControl(this.userData._id, [Validators.required]),
    message: new FormControl('', [Validators.required]),
  }
  )
  get f() {
    return this.form.controls;
  }
 
  onSubmit() {
    this.form.value.user_id=this.userData._id
  
    this.emergency.submitData(this.form.value).subscribe({
      complete: () => {
        window.alert('Success'),this._router.navigate(['/emegency']);},
      
      error: () => {
        console.log('Error');
      },
    });
  }
}
