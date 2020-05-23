import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJobResultComponent } from './modal-job-result.component';

describe('ModalJobResultComponent', () => {
  let component: ModalJobResultComponent;
  let fixture: ComponentFixture<ModalJobResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalJobResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJobResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
