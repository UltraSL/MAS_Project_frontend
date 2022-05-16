import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { RequestComponent } from './request/request.component';
import { StatusrequestComponent } from './statusrequest/statusrequest.component';

import { RegistrationComponent } from './registration/registration.component';

import { ViewRequestComponent } from './view-request/view-request.component';
import { ViewRequestDetailsComponent } from './view-request-details/view-request-details.component';
import { TransporterViewRequestsComponent } from './transporter-view-requests/transporter-view-requests.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { DriverListComponent } from './driver-list/driver-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
 
    ForgetPasswordComponent,
    EditProfileComponent,
    DashboardComponent,
    NotificationComponent,
    RequestComponent,
    StatusrequestComponent,
 
    RegistrationComponent,
       ViewRequestComponent,
       ViewRequestDetailsComponent,
       TransporterViewRequestsComponent,
       VehicleListComponent,
       DriverListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
