import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLocalWorkersComponent } from './config-local-workers.component';

describe('ConfigLocalWorkersComponent', () => {
  let component: ConfigLocalWorkersComponent;
  let fixture: ComponentFixture<ConfigLocalWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLocalWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLocalWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
