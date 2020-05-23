import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListTimeComponent } from './controller-list-time.component';

describe('ControllerListTimeComponent', () => {
  let component: ControllerListTimeComponent;
  let fixture: ComponentFixture<ControllerListTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
