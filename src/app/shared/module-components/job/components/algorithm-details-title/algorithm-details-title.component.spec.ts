import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmDetailsTitleComponent } from './algorithm-details-title.component';

describe('AlgorithmDetailsTitleComponent', () => {
  let component: AlgorithmDetailsTitleComponent;
  let fixture: ComponentFixture<AlgorithmDetailsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgorithmDetailsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgorithmDetailsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
