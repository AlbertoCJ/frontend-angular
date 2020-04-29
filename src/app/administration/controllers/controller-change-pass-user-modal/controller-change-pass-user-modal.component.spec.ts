import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerChangePassUserModalComponent } from './controller-change-pass-user-modal.component';

describe('ControllerChangePassUserModalComponent', () => {
  let component: ControllerChangePassUserModalComponent;
  let fixture: ComponentFixture<ControllerChangePassUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerChangePassUserModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerChangePassUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
