import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerListPageComponent } from './container-list-page.component';

describe('ContainerListPageComponent', () => {
  let component: ContainerListPageComponent;
  let fixture: ComponentFixture<ContainerListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
