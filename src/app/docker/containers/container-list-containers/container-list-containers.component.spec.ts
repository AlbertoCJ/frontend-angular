import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListContainersComponent } from './container-list-containers.component';

describe('ContainerListContainersComponent', () => {
  let component: ContainerListContainersComponent;
  let fixture: ComponentFixture<ContainerListContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerListContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
