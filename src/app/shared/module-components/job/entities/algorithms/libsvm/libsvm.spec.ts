import { Libsvm } from './libsvm';

describe('Libsvm', () => {
  it('should create an instance', () => {
    expect(new Libsvm()).toBeTruthy();
  });
});
