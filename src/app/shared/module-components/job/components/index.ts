import { AlgorithmLinearRegressionComponent } from './algorithm-linear-regression/algorithm-linear-regression.component';
// tslint:disable-next-line: max-line-length
import { AlgorithmLinearRegressionBaggingComponent } from './algorithm-linear-regression-bagging/algorithm-linear-regression-bagging.component';
import { AlgorithmIBKComponent } from './algorithm-ibk/algorithm-ibk.component';
import { ConfigLocalWorkersComponent } from './config-local-workers/config-local-workers.component';
import { ConfigAwsWorkersComponent } from './config-aws-workers/config-aws-workers.component';
import { JobCardComponent } from './job-card/job-card.component';

export const JOB_COMPONENTS = [
    AlgorithmLinearRegressionComponent,
    AlgorithmLinearRegressionBaggingComponent,
    AlgorithmIBKComponent,
    ConfigLocalWorkersComponent,
    ConfigAwsWorkersComponent,
    JobCardComponent
];
