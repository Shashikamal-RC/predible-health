import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-low-attenuation-analysis',
  templateUrl: './low-attenuation-analysis.component.html',
  styleUrls: ['./low-attenuation-analysis.component.scss']
})
export class LowAttenuationAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createDocument(this.tableData)
  }

  mycontent : any;

  createDocument(data){
    this.mycontent = `<h1><strong>Low Attenuation Analysis</strong></h1>
      <img src="./assets/emphysema_0.png" alt="amphysema_0" width="300px">
      <br/>
      <img src="./assets/emphysema_20.png" alt="amphysema_20" width="300px">
       ${this.getData(data)}
    `
  }

  getData(data){
    var result = ``;
    for(var i=0; i<data.length; i++){
      result = result + `<tr>`;
      if(data[i].heighlight){
        result = result + `<td></td>` + 
                `<td> <b>` + data[i].index + `</b></td>` +
                `<td> <b>` + data[i].volume + `</b></td>` +
                `<td> <b>` + data[i].percentage + `</b></td>` + 
                `<td> <b>` + data[i].lla + `</b></td>`
        result = result + `</tr>`;
      }else{
        result = result + `<td>` + "  H  " + `</td>` + 
                `<td>` + data[i].index + `</td>` +
                `<td>` + data[i].volume + `</td>` +
                `<td>` + data[i].percentage + `</td>` + 
                `<td>` + data[i].lla + `</td>`  
        result = result + `</tr>`;
      }
    }

    var basicStrct = `
    <table>
      <tr> 
          <th></th>
          <th></th>
          <th>Volume(L)</th>
          <th>Percentage</th>
          <th>LLA(%)</th>
      </tr>
      <tr>
        ${result}
      </tr>
    </table>`

    return basicStrct;
  }

  tableData = [
    {
      "index" : "Whole Lung",
      "volume" : "4.64",
      "percentage" : "",
      "lla" : "22.96%",
      "heighlight" : true
    },
    {
      "index" : "Left",
      "volume" : "3.53",
      "percentage" : "76%",
      "lla" : "22.63%",
      "heighlight" : false
    },
    {
      "index" : "Left Upper",
      "volume" : "0.85",
      "percentage" : "24%",
      "lla" : "24.01%",
      "heighlight" : true
    },
    {
      "index" : "Left Lower",
      "volume" : "2.68",
      "percentage" : "76.0%",
      "lla" : "43.0%",
      "heighlight" : true
    },
    {
      "index" : "Right",
      "volume" : "1.11",
      "percentage" : "23%",
      "lla" : "24.03%",
      "heighlight" : false
    },
    {
      "index" : "Right Uper",
      "volume" : "0.39",
      "percentage" : "35%",
      "lla" : "25.15%",
      "heighlight" : false
    },
    {
      "index" : "Right Middle",
      "volume" : "0.68",
      "percentage" : "61%",
      "lla" : "23.38%",
      "heighlight" : true
    },
    {
      "index" : "Right Lower",
      "volume" : "0.04",
      "percentage" : "4%",
      "lla" : "24.28%",
      "heighlight" : true
    }
  ]

}
