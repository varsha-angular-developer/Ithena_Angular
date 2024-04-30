import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrChartComponent } from './mrr-chart.component';

describe('MrrChartComponent', () => {
  let component: MrrChartComponent;
  let fixture: ComponentFixture<MrrChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrrChartComponent]
    });
    fixture = TestBed.createComponent(MrrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
