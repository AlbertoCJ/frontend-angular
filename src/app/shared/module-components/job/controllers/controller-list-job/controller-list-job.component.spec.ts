import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListJobComponent } from './controller-list-job.component';

describe('ControllerListJobComponent', () => {
  let component: ControllerListJobComponent;
  let fixture: ComponentFixture<ControllerListJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
