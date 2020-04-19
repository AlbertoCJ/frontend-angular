import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZerorComponent } from './algorithm-zeror.component';

describe('ZerorComponent', () => {
  let component: ZerorComponent;
  let fixture: ComponentFixture<ZerorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZerorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZerorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
