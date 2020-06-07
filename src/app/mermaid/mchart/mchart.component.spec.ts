import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MchartComponent } from './mchart.component';

describe('MchartComponent', () => {
  let component: MchartComponent;
  let fixture: ComponentFixture<MchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
