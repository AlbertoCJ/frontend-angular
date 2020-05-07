import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListJobLatestsComponent } from './controller-list-job-latests.component';

describe('ControllerListJobLatestsComponent', () => {
  let component: ControllerListJobLatestsComponent;
  let fixture: ComponentFixture<ControllerListJobLatestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListJobLatestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListJobLatestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
