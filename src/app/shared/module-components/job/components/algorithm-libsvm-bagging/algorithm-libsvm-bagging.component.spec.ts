import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmLibsvmBaggingComponent } from './algorithm-libsvm-bagging.component';

describe('AlgorithmLibsvmBaggingComponent', () => {
  let component: AlgorithmLibsvmBaggingComponent;
  let fixture: ComponentFixture<AlgorithmLibsvmBaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmLibsvmBaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmLibsvmBaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
