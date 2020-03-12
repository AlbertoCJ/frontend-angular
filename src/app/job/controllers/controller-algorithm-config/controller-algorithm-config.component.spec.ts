import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerAlgorithmConfigComponent } from './controller-algorithm-config.component';

describe('ControllerAlgorithmConfigComponent', () => {
  let component: ControllerAlgorithmConfigComponent;
  let fixture: ComponentFixture<ControllerAlgorithmConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerAlgorithmConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerAlgorithmConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
