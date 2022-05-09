import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userData : any = {}
  editedUserData : any = {}

  constructor() { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData.firstName +" user ")
/*
    this.editedUserData.firstName = this.userData.firstName;
    this.editedUserData.lastName = this.userData.lastName;
    this.editedUserData.email = this.userData.email;
    this.editedUserData.position = this.userData.position;
    this.editedUserData.department = this.userData.department;
    this.editedUserData.supervisorName = this.userData.supervisorName;
    this.editedUserData.mobile = this.userData.mobile;
*/

  }

}
