import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerCreateUserModalComponent } from './controller-create-user-modal.component';

describe('ControllerCreateUserModalComponent', () => {
  let component: ControllerCreateUserModalComponent;
  let fixture: ComponentFixture<ControllerCreateUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerCreateUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerCreateUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
