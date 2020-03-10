import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchJobPageComponent } from './launch-job-page.component';

describe('LaunchJobPageComponent', () => {
  let component: LaunchJobPageComponent;
  let fixture: ComponentFixture<LaunchJobPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchJobPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchJobPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
