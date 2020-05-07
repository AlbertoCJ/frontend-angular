import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListJobRunningComponent } from './controller-list-job-running.component';

describe('ControllerListJobRunningComponent', () => {
  let component: ControllerListJobRunningComponent;
  let fixture: ComponentFixture<ControllerListJobRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListJobRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListJobRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
