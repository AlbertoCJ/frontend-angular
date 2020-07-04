import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersAwsCardComponent } from './containers-aws-card.component';

describe('ContainersAwsCardComponent', () => {
  let component: ContainersAwsCardComponent;
  let fixture: ComponentFixture<ContainersAwsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainersAwsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersAwsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
