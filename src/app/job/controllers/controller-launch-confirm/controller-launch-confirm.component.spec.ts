import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerLaunchConfirmComponent } from './controller-launch-confirm.component';

describe('ControllerLaunchConfirmComponent', () => {
  let component: ControllerLaunchConfirmComponent;
  let fixture: ComponentFixture<ControllerLaunchConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerLaunchConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerLaunchConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
