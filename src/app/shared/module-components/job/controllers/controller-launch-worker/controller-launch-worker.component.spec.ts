import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerLaunchWorkerComponent } from './controller-launch-worker.component';

describe('ControllerLaunchWorkerComponent', () => {
  let component: ControllerLaunchWorkerComponent;
  let fixture: ComponentFixture<ControllerLaunchWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerLaunchWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerLaunchWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
