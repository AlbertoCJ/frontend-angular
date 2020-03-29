import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmLinearRegressionComponent } from './algorithm-linear-regression.component';

describe('AlgorithmLinearRegressionComponent', () => {
  let component: AlgorithmLinearRegressionComponent;
  let fixture: ComponentFixture<AlgorithmLinearRegressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmLinearRegressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmLinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
