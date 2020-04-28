import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationUsersPageComponent } from './administration-users-page.component';

describe('AdministrationUsersPageComponent', () => {
  let component: AdministrationUsersPageComponent;
  let fixture: ComponentFixture<AdministrationUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
