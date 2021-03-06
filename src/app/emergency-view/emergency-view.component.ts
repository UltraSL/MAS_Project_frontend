import { Component, OnInit } from '@angular/core';
import { EmergencyService } from '../emergency.service';

@Component({
  selector: 'app-emergency-view',
  templateUrl: './emergency-view.component.html',
  styleUrls: ['./emergency-view.component.css']
})
export class EmergencyViewComponent implements OnInit {
  emergencyData: any = {};
  constructor(private emergency :EmergencyService) { }

  ngOnInit(): void {
 
      this.emergency.getAllEmergencies().subscribe((res: any) => {
        this.emergencyData = res;
        console.log(res);
      }
      );
    }
  
    deleteEmergency(id: string) {
      this.emergency.deleteEmergency(id).subscribe((res: any) => {
        console.log(res);
        this.ngOnInit();
        alert("delete sucessfull");
      }
      );
    }
//get add data from emergency service


}
