import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-attenuation-analysis',
  templateUrl: './high-attenuation-analysis.component.html',
  styleUrls: ['./high-attenuation-analysis.component.scss']
})
export class HighAttenuationAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createDocument(this.tableData);
  }

  mycontent : any;
  
  tableData = [
    {
      "index" : "Whole Lung",
      "data" : [21.79, 1008.86,	9.83,	455.16,	11.69,	541.29,	78.21,	3621.37]
    },
    {
      "index" : "Left Lung",
      "data" : [2.06,	28.53,	0.0,	0.0,	1.92,	26.59,	97.94,	1355.34]
    },
    {
      "index" : "Right Lung",
      "data" : [30.2,	980.33,	14.02,	455.16,	15.85,	514.7,	69.8,	2266.03]
    }
  ]


  createDocument(tableData){
      this.mycontent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            th, td {padding : 20px;}
            h1 {color:blue;}
          </style>
        </head>
        <body>
            <h1><strong>High Attenuation Analysis</strong></h1>
            <img src="../../../assets/fibrosis_0.png" alt="amphysema_0" width="300px">
            <br/>
            <img src="../../../assets/fibrosis_20.png" alt="amphysema_20" width="300px">
              <p style="text-align: center"><strong>Fibrosis</strong></p>

            <img src="../../../assets/honeycombing_0.png" alt="honeycombing_0" width="300px">
            <br/>
            <img src="../../../assets/honeycombing_20.png" alt="heneycombing_20" width="300px">
              <p style="text-align: center"><strong>Honey Combing</strong></p>

            <img src="../../../assets/gg_0.png" alt="gg_0" width="300px">
            <br/>
            <img src="../../../assets/gg_20.png" alt="gg_20" width="300px">
              <p style="text-align: center"><strong>Ground glass</strong></p>

            <br>
            <h1><strong>Quantification</strong></h1>
            ${this.getData(tableData)}

            <br>
            <h1><strong>Fibrosis Distribution</strong></h1>
            ${this.getData(tableData)}
            <br>
            ${this.getData(tableData)}
        </body>
      </html>
    `
  }

  getData(data){
    var result = ``;
    for(var i=0; i< data.length; i++){
      result = result + `<tr>` +
              `<td colspan="2">` + data[i].index + `</td>` + 
              `<td>` + data[i].data[0] + `</td>` +
              `<td>` + data[i].data[1] + `</td>` +
              `<td>` + data[i].data[2] + `</td>` +
              `<td>` + data[i].data[3] + `</td>` +
              `<td>` + data[i].data[4] + `</td>` +
              `<td>` + data[i].data[5] + `</td>` +
              `<td>` + data[i].data[6] + `</td>` + 
              `<td>` + data[i].data[7] + `</td>` + `</tr>`
    }

    var basicStrct = `
          <table>
            <tr>
                <th colspan="2" style="border: none;"></th>
                <th colspan="2">Fibrosis</th>
                <th colspan="2">HoneyCombing</th>
                <th colspan="2">Ground glass</th>
                <th colspan="2">Normal</th>
            </tr>
            <tr>
                <td style="border: none;"></td>
                <td style="border: none;"></td>
                <td>%</td>
                <td>mL</td>
                <td>%</td>
                <td>mL</td>
                <td>%</td>
                <td>mL</td>
                <td>%</td>
                <td>mL</td>
            </tr>
            <tr>
                ${result}
            </tr>
          </table>
        
      `
    
      return basicStrct;
  }

}
