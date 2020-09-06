import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoduleAnalysisComponent } from './components/nodule-analysis/nodule-analysis.component';
import { LowAttenuationAnalysisComponent } from './components/low-attenuation-analysis/low-attenuation-analysis.component';
import { HighAttenuationAnalysisComponent } from './components/high-attenuation-analysis/high-attenuation-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/nodule-analysis', pathMatch: 'full' },
  { path: 'nodule-analysis', component:  NoduleAnalysisComponent},
  { path: 'low-attenuation-analysis', component:  LowAttenuationAnalysisComponent},
  { path: 'high-attenuation-analysis', component: HighAttenuationAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
