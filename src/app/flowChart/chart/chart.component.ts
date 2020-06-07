import { Component, OnInit } from '@angular/core';

declare var flowchart: any;

@Component({
  selector: 'app-chart',
  // templateUrl: './chart.component.html',
  template: `
    <div>
      <div id="canvas"></div>
    </div>
  `,
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let content = 'st=>start: Start|past:>http://www.google.com[blank]\n\
      e=>end: Ende:>http://www.google.com\n\
      op1=>operation: My Operation|past\n\
      op2=>operation: Stuff|current\n\
      sub1=>subroutine: My Subroutine|invalid\n\
      cond=>condition: Yes\n\
      or No?|approved:>http://www.google.com\n\
      c2=>condition: Good idea|rejected\n\
      io=>inputoutput: catch something...|request\n\
      st->op1(right)->cond\n\
      cond(yes, right)->c2\n\
      cond(no)->sub1(left)->op1\n\
      c2(yes)->io->e\n\
      c2(no)->op2->e';
      let chart = flowchart.parse(content);
      chart.drawSVG('canvas', {
          // 'x': 30,
          // 'y': 50,
          'line-width': 3,
              'line-length': 50,
              'text-margin': 10,
              'font-size': 14,
              'font': 'normal',
              'font-family': 'Helvetica',
              'font-weight': 'normal',
              'font-color': 'black',
              'line-color': 'black',
              'element-color': 'black',
              'fill': 'white',
              'yes-text': 'yes',
              'no-text': 'no',
              'arrow-end': 'block',
              'symbols': {
              'start': {
                  'font-color': 'red',
                      'element-color': 'green',
                      'fill': 'yellow'
              },
                  'end': {
                  'class': 'end-element'
              }
          },
              'flowstate': {
              'past': {
                  'fill': '#CCCCCC',
                      'font-size': 12
              },
                  'current': {
                  'fill': 'yellow',
                      'font-color': 'red',
                      'font-weight': 'bold'
              },
                  'future': {
                  'fill': '#FFFF99'
              },
                  'request': {
                  'fill': 'blue'
              },
                  'invalid': {
                  'fill': '#444444'
              },
                  'approved': {
                  'fill': '#58C4A3',
                      'font-size': 12,
                      'yes-text': 'APPROVED',
                      'no-text': 'n/a'
              },
                  'rejected': {
                  'fill': '#C45879',
                      'font-size': 12,
                      'yes-text': 'n/a',
                      'no-text': 'REJECTED'
              }
          }
      });





    };
    

}
