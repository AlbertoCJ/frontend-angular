import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationConfigPageComponent } from './administration-config-page.component';

describe('AdministrationConfigPageComponent', () => {
  let component: AdministrationConfigPageComponent;
  let fixture: ComponentFixture<AdministrationConfigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationConfigPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
