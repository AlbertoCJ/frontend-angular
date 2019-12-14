import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetsUploadPageComponent } from './datasets-upload-page.component';

describe('DatasetsUploadPageComponent', () => {
  let component: DatasetsUploadPageComponent;
  let fixture: ComponentFixture<DatasetsUploadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetsUploadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetsUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
