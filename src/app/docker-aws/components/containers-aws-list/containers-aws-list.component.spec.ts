import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAwsListComponent } from './containers-aws-list.component';

describe('ContainersAwsListComponent', () => {
  let component: ContainersAwsListComponent;
  let fixture: ComponentFixture<ContainersAwsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainersAwsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersAwsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
