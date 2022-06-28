import { Component, OnInit , Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder , FormGroup,  FormControl,Validators } from '@angular/forms';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  FeedbackData :any = {};


  constructor(  @Inject(DOCUMENT) private _document: Document,private feedback:FeedbackService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  form = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required]),
  }
  )
  get f() {
    return this.form.controls;
  }
 

  sendFeedback(){
    console.log(this.form.value);
this.feedback.submitFeedback(this.form.value).subscribe({
  complete: () => {
    window.alert('Success'),
    window.location.reload();
  },
  
  error: () => {
    console.log('Error');
  },
});
}

  }

   


