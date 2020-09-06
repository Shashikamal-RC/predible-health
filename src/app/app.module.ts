import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormControl } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoduleAnalysisComponent } from './components/nodule-analysis/nodule-analysis.component';
import { LowAttenuationAnalysisComponent } from './components/low-attenuation-analysis/low-attenuation-analysis.component';
import { HighAttenuationAnalysisComponent } from './components/high-attenuation-analysis/high-attenuation-analysis.component';
import { GuidelinesComponent } from './components/guidelines/guidelines.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { CKEditorModule } from 'ng2-ckeditor'
import { ClipboardModule } from '@angular/cdk/clipboard';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { ReportEditorComponent } from './components/report-editor/report-editor.component';
import { TableCompComponent } from './components/table-comp/table-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    NoduleAnalysisComponent,
    LowAttenuationAnalysisComponent,
    HighAttenuationAnalysisComponent,
    GuidelinesComponent,
    ReportEditorComponent,
    TableCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTooltipModule,
    MatTabsModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule,
    CKEditorModule,
    MatFormFieldModule,
    MatSelectModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
