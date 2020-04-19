import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJobDetailsComponent } from './modal-job-details.component';

describe('ModalJobDetailsComponent', () => {
  let component: ModalJobDetailsComponent;
  let fixture: ComponentFixture<ModalJobDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJobDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJobDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
