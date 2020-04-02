import { AwsWorkers } from './aws-workers';

describe('AwsWorkers', () => {
  it('should create an instance', () => {
    expect(new AwsWorkers()).toBeTruthy();
  });
});
