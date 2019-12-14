import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsListPageComponent } from './datasets-list-page.component';

describe('DatasetsListPageComponent', () => {
  let component: DatasetsListPageComponent;
  let fixture: ComponentFixture<DatasetsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
