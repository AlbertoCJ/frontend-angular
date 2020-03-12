import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerSetectDatasetComponent } from './controller-setect-dataset.component';

describe('ControllerSetectDatasetComponent', () => {
  let component: ControllerSetectDatasetComponent;
  let fixture: ComponentFixture<ControllerSetectDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerSetectDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerSetectDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
