import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAWSListPageComponent } from './container-awslist-page.component';

describe('ContainerAWSListPageComponent', () => {
  let component: ContainerAWSListPageComponent;
  let fixture: ComponentFixture<ContainerAWSListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAWSListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAWSListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
