import { ConfigParamBooleanPipe } from './config-param-boolean.pipe';

describe('ConfigParamBooleanPipe', () => {
  it('create an instance', () => {
    const pipe = new ConfigParamBooleanPipe();
    expect(pipe).toBeTruthy();
  });
});
