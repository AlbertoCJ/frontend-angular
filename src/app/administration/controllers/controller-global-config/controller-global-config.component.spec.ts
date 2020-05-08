import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerGlobalConfigComponent } from './controller-global-config.component';

describe('ControllerGlobalConfigComponent', () => {
  let component: ControllerGlobalConfigComponent;
  let fixture: ComponentFixture<ControllerGlobalConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerGlobalConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerGlobalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
