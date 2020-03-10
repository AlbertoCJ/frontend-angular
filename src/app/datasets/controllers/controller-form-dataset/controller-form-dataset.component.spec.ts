import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerFormDatasetComponent } from './controller-form-dataset.component';

describe('ControllerFormDatasetComponent', () => {
  let component: ControllerFormDatasetComponent;
  let fixture: ComponentFixture<ControllerFormDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerFormDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerFormDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
