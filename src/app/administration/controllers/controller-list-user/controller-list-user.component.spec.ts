import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListUserComponent } from './controller-list-user.component';

describe('ControllerListUserComponent', () => {
  let component: ControllerListUserComponent;
  let fixture: ComponentFixture<ControllerListUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
