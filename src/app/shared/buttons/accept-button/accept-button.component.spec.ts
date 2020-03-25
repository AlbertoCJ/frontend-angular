import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptButtonComponent } from './accept-button.component';

describe('AcceptButtonComponent', () => {
  let component: AcceptButtonComponent;
  let fixture: ComponentFixture<AcceptButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
