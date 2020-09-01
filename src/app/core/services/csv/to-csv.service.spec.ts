import { TestBed } from '@angular/core/testing';

import { ToCsvService } from './to-csv.service';

describe('ToCsvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToCsvService = TestBed.get(ToCsvService);
    expect(service).toBeTruthy();
  });
});
