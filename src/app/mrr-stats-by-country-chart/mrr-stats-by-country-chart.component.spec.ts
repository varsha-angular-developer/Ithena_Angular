import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrStatsByCountryChartComponent } from './mrr-stats-by-country-chart.component';

describe('MrrStatsByCountryChartComponent', () => {
  let component: MrrStatsByCountryChartComponent;
  let fixture: ComponentFixture<MrrStatsByCountryChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrrStatsByCountryChartComponent]
    });
    fixture = TestBed.createComponent(MrrStatsByCountryChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
