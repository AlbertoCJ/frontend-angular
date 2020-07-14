export class GlobalConfig {

    // tslint:disable-next-line: variable-name
    _id: string;
    localContainer: any;
    awsContainer: any;
    showLists: any;
    algorithms: any;

    constructor(data: any) {
        this._id = data._id;
        this.localContainer = this.setLocalContainer(data.localContainer);
        this.awsContainer = this.setLocalContainer(data.awsContainer);
        this.showLists = this.setShowLists(data.showLists);
        this.algorithms = this.setAlgorithms(data.algorithms);
    }

    setLocalContainer(data: any) {
        return {
            numContMaxGlobal: data.numContMaxGlobal,
            localActivated: data.localActivated
        };
    }

    setAwsContainer(data: any) {
        return {
            numContMaxGlobal: data.numContMaxGlobal,
            awsActivated: data.awsActivated
        };
    }

    setShowLists(data: any) {
        return {
            home: {
                showLatestsJobs: data.home.showLatestsJobs,
                showJobsRunning: data.home.showJobsRunning
            },
            dataset: {
                showDatasets: data.dataset.showDatasets
            },
            job: {
                showJobs: data.job.showJobs
            }
        };
    }

    setAlgorithms(data: any) {
        return {
            linearRegression: data.linearRegression,
            linearRegressionBagging: data.linearRegressionBagging,
            IBk: data.IBk,
            ZeroR: data.ZeroR,
            M5P: data.M5P,
            M5PBagging: data.M5PBagging,
            M5Rules: data.M5Rules,
            DecisionStump: data.DecisionStump,
            DecisionStumpBagging: data.DecisionStumpBagging,
            Libsvm: data.Libsvm,
            LibsvmBagging: data.LibsvmBagging
        };
    }
}
