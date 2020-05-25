import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultErrorComparisonComponent } from './result-error-comparison.component';

describe('ResultErrorComparisonComponent', () => {
  let component: ResultErrorComparisonComponent;
  let fixture: ComponentFixture<ResultErrorComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultErrorComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultErrorComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
