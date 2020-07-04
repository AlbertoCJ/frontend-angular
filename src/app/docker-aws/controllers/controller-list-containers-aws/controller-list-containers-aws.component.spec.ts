import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListContainersAwsComponent } from './controller-list-containers-aws.component';

describe('ControllerListContainersAwsComponent', () => {
  let component: ControllerListContainersAwsComponent;
  let fixture: ComponentFixture<ControllerListContainersAwsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListContainersAwsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListContainersAwsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
