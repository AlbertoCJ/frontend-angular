import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTextareaComponent } from './error-textarea.component';

describe('ErrorTextareaComponent', () => {
  let component: ErrorTextareaComponent;
  let fixture: ComponentFixture<ErrorTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
