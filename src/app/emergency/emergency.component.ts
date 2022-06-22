import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements OnInit {

  userData : any = {}
  emergencyData : any = {}

  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
  }

}
