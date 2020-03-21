import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsPanelNormalComponent } from './buttons-panel-normal.component';

describe('ButtonsPanelNormalComponent', () => {
  let component: ButtonsPanelNormalComponent;
  let fixture: ComponentFixture<ButtonsPanelNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsPanelNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsPanelNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
