import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListDatasetComponent } from './controller-list-dataset.component';

describe('ControllerListDatasetComponent', () => {
  let component: ControllerListDatasetComponent;
  let fixture: ComponentFixture<ControllerListDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
