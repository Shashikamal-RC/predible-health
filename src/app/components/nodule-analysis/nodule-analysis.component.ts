import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GuidelinesComponent } from '../guidelines/guidelines.component';

@Component({
  selector: 'app-nodule-analysis',
  templateUrl: './nodule-analysis.component.html',
  styleUrls: ['./nodule-analysis.component.scss']
})
export class NoduleAnalysisComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {
    this.createDocument();
   }

  mycontent: string;
  
  risk : boolean = false;

  recommendation = `<p>Recommendation: 
            <strong>Follow-up in 3-6 months recommended. Subsequent management based 
                    on most suspicious nodule (Fleischner Society 2017).
            </strong>
          </p>`

  images = ``;
  info = ``;

  riskData(){
    if(this.risk){
      for(var item of this.data){
        item.addtoreport = true
      }
      this.createDocument();
    }
  }

  createDocument(){
    var reportData = this.data.filter(data => data.addtoreport === true);
    console.log(reportData)
    if(reportData.length){
      this.images = ``;
      this.info = ``;
      var count = 0;
      for(var data of reportData){
          this.addImageReport(data.image);
          count++;
          var only = (count > 1) ? true : false  
          this.addInfoToReport(data.lobe, data.type, data.classification,data.size, data.volume, data.border, only);
      }
      this.mycontent = `
            <h1><b>Nodule Analysis</b></h1>
            <p>There are a total of ${reportData.length} nodules detected in the lung</p>
            ${this.images}
            ${this.info}
            ${this.recommendation}
          `;
    }else{
      this.mycontent = `<p>No data Added</p>`;
    }
  }

  addImageReport(imageData){
      this.images = this.images + `<img src="` + imageData  + `" alt="" width="100px" />`
  }

  addInfoToReport(lobe, type, classification, size, volume, border, only){
    var data = (only) ? `also` : ``
    this.info = this.info + `<br>` + `<p>A <i>`+ type + `</i> nodule with ` + border + ` border was `+ data + ` seen in the <i>` + 
          lobe +  `</i> Lobe. It has a diameter of <b>`+ size + `</b> mm and a volume of <b>` 
          + volume + `</b> ml. It is <b>` + classification + `%</b> calcified.`;
  }

  data = [ 
    {
      "id" : 1,
      "name": "Nodule 1",
      "image" : "./assets/thumbnail_0.png",
      "lobe": "Right Upper",
      "type" : "Solid",
      "classification": 10,
      "size": 20,
      "volume": 30,
      "border" : "Smooth",
      "falsepositive" : true,
      "mostsignificant" : false,
      "addtoreport" : false,
    },
    {
      "id" : 2,
      "name": "Nodule 2",
      "image" : "./assets/thumbnail_4.png",
      "lobe": "Left Lower",
      "type" : "Part-solid",
      "classification": 35,
      "size": 30,
      "volume": 28,
      "border" : "Lobulated",
      "falsepositive" : true,
      "mostsignificant" : false,
      "addtoreport" : false,
    },
    {
      "id" : 3,
      "name": "Nodule 3",
      "image" : "./assets/thumbnail_5.png",
      "lobe": "Right Lower",
      "type" : "Ground-glass",
      "classification": 19,
      "size": 26,
      "volume": 37,
      "border" : "Poorly Defined",
      "falsepositive" : true,
      "mostsignificant" : false,
      "addtoreport" : false,
    }
  ]

  lobes: any = [
    {name: 'Right Upper', value: ''},
    {name: 'Right Middle', value: ''},
    {name: 'Right Lower', value: ''},
    {name: 'Left Upper', value: ''},
    {name: 'Left Lower', value: ''},
  ];

  types: any = [
    {name: 'Solid', vale: ''},
    {name: 'Part-solid', value: ''},
    {name: 'Ground-glass', value: ''},
    ];

  borders: any = [
    {name: 'Smooth', value: ''},
    {name: 'Poorly Defined', value: ''},
    {name: 'Spiculated', value: ''},
    {name: 'Lobulated', value: ''},
  ];


  ngOnInit() {}

  radioData(data){
    console.log("risk => ",data)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GuidelinesComponent, {
      width: '60%',
      // data: {name: this.name, animal: this.animal}
      // backdropClass: 'backdropBackground'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  makeAsFalsePositive(event, id){
    console.log(this.data)
    alert(this.data[id].name + event + " Marksed as false positive");
  }

  makeAsMostSignificant(event, id){
    console.log(this.data)
    alert(this.data[id].name + " Made as most significant");
  }

  addToReport(event, id){
    console.log(this.data)
    alert(this.data[id].name + " Added to report")
  }

}
