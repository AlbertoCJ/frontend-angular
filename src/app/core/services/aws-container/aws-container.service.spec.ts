import { TestBed } from '@angular/core/testing';

import { AwsContainerService } from './aws-container.service';

describe('AwsContainerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwsContainerService = TestBed.get(AwsContainerService);
    expect(service).toBeTruthy();
  });
});
