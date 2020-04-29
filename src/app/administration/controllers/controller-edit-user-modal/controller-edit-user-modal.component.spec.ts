import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerEditUserModalComponent } from './controller-edit-user-modal.component';

describe('ControllerEditUserModalComponent', () => {
  let component: ControllerEditUserModalComponent;
  let fixture: ComponentFixture<ControllerEditUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerEditUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerEditUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
