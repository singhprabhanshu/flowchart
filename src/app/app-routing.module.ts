import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgComponent } from './chart/org/org.component';
import { MchartComponent } from './mermaid/mchart/mchart.component';
import { ChartComponent } from './flowChart/chart/chart.component';
import { Chart2Component } from './flowChart/chart2/chart2.component';


const routes: Routes = [
  { path: '', component: MchartComponent }, 

  { path: 'org/chart', component: OrgComponent },
  { path: 'org/flow-chart', component: ChartComponent },
  { path: 'org/flow-chart-1', component: Chart2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
