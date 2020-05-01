import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmM5pBaggingComponent } from './algorithm-m5p-bagging.component';

describe('AlgorithmM5pBaggingComponent', () => {
  let component: AlgorithmM5pBaggingComponent;
  let fixture: ComponentFixture<AlgorithmM5pBaggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmM5pBaggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmM5pBaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
