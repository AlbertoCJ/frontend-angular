import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerJobResultComponent } from './controller-job-result.component';

describe('ControllerJobResultComponent', () => {
  let component: ControllerJobResultComponent;
  let fixture: ComponentFixture<ControllerJobResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerJobResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerJobResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
