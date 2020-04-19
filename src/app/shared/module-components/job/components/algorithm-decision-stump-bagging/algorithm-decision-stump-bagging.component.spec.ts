import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDecisionStumpBaggingComponent } from './algorithm-decision-stump-bagging.component';

describe('AlgorithmDecisionStumpBaggingComponent', () => {
  let component: AlgorithmDecisionStumpBaggingComponent;
  let fixture: ComponentFixture<AlgorithmDecisionStumpBaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDecisionStumpBaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDecisionStumpBaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
