import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerModalJobDetailsComponent } from './controller-modal-job-details.component';

describe('ControllerModalJobDetailsComponent', () => {
  let component: ControllerModalJobDetailsComponent;
  let fixture: ComponentFixture<ControllerModalJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerModalJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerModalJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
