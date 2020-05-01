import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmLibsvmComponent } from './algorithm-libsvm.component';

describe('AlgorithmLibsvmComponent', () => {
  let component: AlgorithmLibsvmComponent;
  let fixture: ComponentFixture<AlgorithmLibsvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmLibsvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmLibsvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
