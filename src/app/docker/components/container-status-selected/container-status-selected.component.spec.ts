import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerStatusSelectedComponent } from './container-status-selected.component';

describe('ContainerStatusSelectedComponent', () => {
  let component: ContainerStatusSelectedComponent;
  let fixture: ComponentFixture<ContainerStatusSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerStatusSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerStatusSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
