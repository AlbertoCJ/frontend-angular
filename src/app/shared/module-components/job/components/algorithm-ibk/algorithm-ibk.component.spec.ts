import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmIBKComponent } from './algorithm-ibk.component';

describe('AlgorithmIBKComponent', () => {
  let component: AlgorithmIBKComponent;
  let fixture: ComponentFixture<AlgorithmIBKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmIBKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmIBKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
