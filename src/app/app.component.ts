import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'predible-health';

  position = "below"

  constructor(
    private router : Router
  ){}

  navigate(path){
    console.log("path : ", path)
    this.router.navigate([path])
  }

  userData = {
    "name" : "00303380",
    "accesion_no" : "00303380",
    "sex" :"M",
    "patient_id" : "00303380",
    "study_date": "01-02-2018",
    "age" :"025Y",
    "ref_physician": "-"
  }
}
