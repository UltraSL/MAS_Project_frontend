import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userData : any = {}
  editedUserData : any = {}
  selectedUserDetail : any = {}

  constructor(private auth : AuthService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData.firstName +" user ")

    this.editedUserData.firstName = this.userData.firstName;
    this.editedUserData.lastName = this.userData.lastName;
    this.editedUserData.email = this.userData.email;
    this.editedUserData.position = this.userData.position;
    this.editedUserData.department = this.userData.department;
    this.editedUserData.supervisorName = this.userData.supervisorName;
    this.editedUserData.mobile = this.userData.mobile;
    this.editedUserData.image = this.userData.image;

    console.log(this.userData._id)
  }

  updateUser(){

    let updateUser = this.editedUserData;
    updateUser._id = this.userData._id;

    this.auth.updateUserDetails(updateUser)
    .subscribe(
      res=> {
        updateUser.push=res;
        this.selectedUserDetail=res;
        window.alert("successfully edited")
        console.log(res)

      },
      err => console.log(err)
    )
  }

}
