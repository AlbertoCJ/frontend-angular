import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTimeComponent } from './modal-time.component';

describe('ModalTimeComponent', () => {
  let component: ModalTimeComponent;
  let fixture: ComponentFixture<ModalTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
