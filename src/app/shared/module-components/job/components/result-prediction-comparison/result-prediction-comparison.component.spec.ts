import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPredictionComparisonComponent } from './result-prediction-comparison.component';

describe('ResultPredictionComparisonComponent', () => {
  let component: ResultPredictionComparisonComponent;
  let fixture: ComponentFixture<ResultPredictionComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultPredictionComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultPredictionComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
