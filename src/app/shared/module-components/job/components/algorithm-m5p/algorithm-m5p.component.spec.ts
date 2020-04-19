import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmM5pComponent } from './algorithm-m5p.component';

describe('AlgorithmM5pComponent', () => {
  let component: AlgorithmM5pComponent;
  let fixture: ComponentFixture<AlgorithmM5pComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmM5pComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmM5pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
