import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDecisionStumpComponent } from './algorithm-decision-stump.component';

describe('AlgorithmDecisionStumpComponent', () => {
  let component: AlgorithmDecisionStumpComponent;
  let fixture: ComponentFixture<AlgorithmDecisionStumpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDecisionStumpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDecisionStumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
