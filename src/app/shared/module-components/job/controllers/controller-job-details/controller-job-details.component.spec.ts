import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerJobDetailsComponent } from './controller-job-details.component';

describe('ControllerJobDetailsComponent', () => {
  let component: ControllerJobDetailsComponent;
  let fixture: ComponentFixture<ControllerJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
