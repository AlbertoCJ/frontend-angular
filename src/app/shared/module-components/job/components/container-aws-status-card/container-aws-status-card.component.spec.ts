import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAwsStatusCardComponent } from './container-aws-status-card.component';

describe('ContainerAwsStatusCardComponent', () => {
  let component: ContainerAwsStatusCardComponent;
  let fixture: ComponentFixture<ContainerAwsStatusCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAwsStatusCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAwsStatusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
