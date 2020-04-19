import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmM5rulesComponent } from './algorithm-m5rules.component';

describe('AlgorithmM5rulesComponent', () => {
  let component: AlgorithmM5rulesComponent;
  let fixture: ComponentFixture<AlgorithmM5rulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmM5rulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmM5rulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
