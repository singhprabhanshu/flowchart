
import {
  OnChanges,
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef
} from "@angular/core";

import * as d3 from "d3";
import  TreeChart from "d3-org-chart";
// const TreeChart = require ('https://bundle.run/d3-org-chart@1.0.4');
// import TreeChart from "https://bundle.run/d3-org-chart@1.0.4";

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit, OnChanges {

  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() data: any[];
  chart;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new TreeChart();
    }
    console.log(this.data);
    this.updateChart();
  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.updateChart();
  }
  updateChart() {
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(500)
      .initialZoom(0.4)
      .onNodeClick(d => console.log(d + " node clicked"))
      .render();
  }

}
