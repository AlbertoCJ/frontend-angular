import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from './split-camel-case-to-string/split-camel-case-to-string.pipe';
import { StatusAlgorithmPipe } from './status-algorithm/status-algorithm.pipe';
import { StatusJobPipe } from './status-job/status-job.pipe';
import { ConfigParamBooleanPipe } from './config-param-boolean/config-param-boolean.pipe';
import { StatusContainerDockerPipe } from './status-container-docker/status-container-docker.pipe';
import { ZoneLaunchPipe } from './zone-launch/zone-launch.pipe';
import { StatusContainerDockerAwsPipe } from './status-container-docker-aws/status-container-docker-aws.pipe';

export const PIPES = [
    CapitalizePipe,
    SplitCamelCaseToStringPipe,
    StatusAlgorithmPipe,
    StatusJobPipe,
    ConfigParamBooleanPipe,
    StatusContainerDockerPipe,
    ZoneLaunchPipe,
    StatusContainerDockerAwsPipe
];