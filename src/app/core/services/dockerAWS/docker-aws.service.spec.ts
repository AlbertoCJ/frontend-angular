import { TestBed } from '@angular/core/testing';

import { DockerAwsService } from './docker-aws.service';

describe('DockerAwsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DockerAwsService = TestBed.get(DockerAwsService);
    expect(service).toBeTruthy();
  });
});
