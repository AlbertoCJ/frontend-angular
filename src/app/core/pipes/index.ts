import { CapitalizePipe } from './capitalize/capitalize.pipe';
import { SplitCamelCaseToStringPipe } from './split-camel-case-to-string/split-camel-case-to-string.pipe';
import { StatusAlgorithmPipe } from './status-algorithm/status-algorithm.pipe';
import { StatusJobPipe } from './status-job/status-job.pipe';

export const PIPES = [
    CapitalizePipe,
    SplitCamelCaseToStringPipe,
    StatusAlgorithmPipe,
    StatusJobPipe
];