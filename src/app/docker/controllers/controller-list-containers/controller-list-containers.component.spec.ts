import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerListContainersComponent } from './controller-list-containers.component';

describe('ContainerListContainersComponent', () => {
  let component: ControllerListContainersComponent;
  let fixture: ComponentFixture<ControllerListContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControllerListContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControllerListContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
