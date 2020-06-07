import { Component, OnInit } from '@angular/core';
declare var flowchart: any;

@Component({
  selector: 'app-chart2',
  // templateUrl: './chart2.component.html',
  template: `
  <div>
    <div id="canvas"></div>
  </div>
`,
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let content = 'st=>start: Start:>http://www.google.com[blank]\n\
    e=>end:>http://www.google.com\n\
    op1=>operation: My Operation\n\
    sub1=>subroutine: My Subroutine\n\
    cond=>condition: Yes\n\
    or No?:>http://www.google.com\n\
    io=>inputoutput: catch something...\n\
    para=>parallel: parallel tasks\n\
    st->op1->cond\n\
    cond(yes)->io->e\n\
    cond(no)->para\n\
    para(path1, bottom)->sub1(right)->op1\n\
    para(path2, top)->op1';
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

      
  }

}
