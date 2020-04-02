import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAwsWorkersComponent } from './config-aws-workers.component';

describe('ConfigAwsWorkersComponent', () => {
  let component: ConfigAwsWorkersComponent;
  let fixture: ComponentFixture<ConfigAwsWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAwsWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAwsWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
