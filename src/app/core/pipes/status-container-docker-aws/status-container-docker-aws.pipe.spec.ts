import { StatusContainerDockerAwsPipe } from './status-container-docker-aws.pipe';

describe('StatusContainerDockerAwsPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusContainerDockerAwsPipe();
    expect(pipe).toBeTruthy();
  });
});
