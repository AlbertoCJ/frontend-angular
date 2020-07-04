import { ContainerAws } from './container-aws';

describe('ContainerAws', () => {
  it('should create an instance', () => {
    expect(new ContainerAws()).toBeTruthy();
  });
});
