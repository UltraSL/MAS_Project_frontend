import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './notification/notification.component';
import { RegistrationComponent } from './registration/registration.component';
import { RequestComponent } from './request/request.component';

import { StatusrequestComponent } from './statusrequest/statusrequest.component';

const routes: Routes = [
  { path :'', redirectTo : '/home' , pathMatch : 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'login', component : LoginComponent},
  { path : 'register', component : RegistrationComponent},
  { path : 'forgetpassword', component : ForgetPasswordComponent},
  { path : 'edit-profile', component : EditProfileComponent},
  { path : 'dashboard', component : DashboardComponent},
  { path : 'request', component : RequestComponent},
  { path : 'statusrequest', component : StatusrequestComponent},
  { path : 'notification', component : NotificationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
