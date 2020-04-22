import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDetailsInfoComponent } from './algorithm-details-info.component';

describe('AlgorithmDetailsInfoComponent', () => {
  let component: AlgorithmDetailsInfoComponent;
  let fixture: ComponentFixture<AlgorithmDetailsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDetailsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
