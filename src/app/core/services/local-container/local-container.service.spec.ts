import { TestBed } from '@angular/core/testing';

import { LocalContainerService } from './local-container.service';

describe('LocalContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalContainerService = TestBed.get(LocalContainerService);
    expect(service).toBeTruthy();
  });
});
