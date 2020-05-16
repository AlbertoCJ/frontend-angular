import { SplitCamelCaseToStringPipe } from './split-camel-case-to-string.pipe';

describe('SplitCamelCaseToStringPipe', () => {
  it('create an instance', () => {
    const pipe = new SplitCamelCaseToStringPipe();
    expect(pipe).toBeTruthy();
  });
});
