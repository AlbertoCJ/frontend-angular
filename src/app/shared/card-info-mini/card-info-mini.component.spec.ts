import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoMiniComponent } from './card-info-mini.component';

describe('CardInfoMiniComponent', () => {
  let component: CardInfoMiniComponent;
  let fixture: ComponentFixture<CardInfoMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInfoMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInfoMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
