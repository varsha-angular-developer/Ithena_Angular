import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrCardsComponent } from './mrr-cards.component';

describe('MrrCardsComponent', () => {
  let component: MrrCardsComponent;
  let fixture: ComponentFixture<MrrCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MrrCardsComponent]
    });
    fixture = TestBed.createComponent(MrrCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
