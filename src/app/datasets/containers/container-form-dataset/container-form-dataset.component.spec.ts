import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerFormDatasetComponent } from './container-form-dataset.component';

describe('ContainerFormDatasetComponent', () => {
  let component: ContainerFormDatasetComponent;
  let fixture: ComponentFixture<ContainerFormDatasetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerFormDatasetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerFormDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
