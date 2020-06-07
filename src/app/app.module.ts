import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartComponent } from './chart/org-chart/org-chart.component';
import { OrgComponent } from './chart/org/org.component';
import { MchartComponent } from './mermaid/mchart/mchart.component';
import { ChartComponent } from './flowChart/chart/chart.component';
import { Chart2Component } from './flowChart/chart2/chart2.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    OrgComponent,
    MchartComponent,
    ChartComponent,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
