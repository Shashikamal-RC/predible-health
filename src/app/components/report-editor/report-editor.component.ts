import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-report-editor',
  templateUrl: './report-editor.component.html',
  styleUrls: ['./report-editor.component.scss']
})
export class ReportEditorComponent implements OnInit {

  constructor() { }

  @Input('reportContent') reportContent ;

  ckeConfig: any;
  @ViewChild("myckeditor") ckeditor: any;

  ngOnInit(): void {
    this.ckeConfig = {
      allowedContent: false,
      extraPlugins: 'divarea',
      disallowedContent: 'table[cellspacing,cellpadding,border]',
      forcePasteAsPlainText: true,
      height : 'auto',
      toolbar : [
        ['Bold','Italic','Underline','StrikeThrough','-','Undo','Redo','-','Cut','Copy','Paste','Find','Replace','-','Outdent','Indent','-','Print'],
        '/',
        ['NumberedList','BulletedList','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
        '/',
        ['Image','Table','-','Link','Flash','Smiley','TextColor','BGColor','Source']
      ]
    };
  }

  onChange($event: any): void {
    console.log("onChange");
    //this.log += new Date() + "<br />";
  }

  onPaste($event: any): void {
    console.log("onPaste");
    //this.log += new Date() + "<br />";
  }

}
