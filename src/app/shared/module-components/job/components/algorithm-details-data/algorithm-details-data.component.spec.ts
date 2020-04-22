import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDetailsDataComponent } from './algorithm-details-data.component';

describe('AlgorithmDetailsDataComponent', () => {
  let component: AlgorithmDetailsDataComponent;
  let fixture: ComponentFixture<AlgorithmDetailsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDetailsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDetailsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
