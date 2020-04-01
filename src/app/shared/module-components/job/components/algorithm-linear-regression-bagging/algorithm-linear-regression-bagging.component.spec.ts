import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmLinearRegressionBaggingComponent } from './algorithm-linear-regression-bagging.component';

describe('AlgorithmLinearRegressionBaggingComponent', () => {
  let component: AlgorithmLinearRegressionBaggingComponent;
  let fixture: ComponentFixture<AlgorithmLinearRegressionBaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmLinearRegressionBaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmLinearRegressionBaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
