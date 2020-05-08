export class GlobalConfig {

    id: string;
    localContainer: any;
    showLists: any;

    constructor(data: any) {
        this.id = data._id || data.id;
        this.localContainer = this.setLocalContainer(data.localContainer);
        this.showLists = this.setShowLists(data.showLists);
    }

    setLocalContainer(data: any) {
        return {
            numContMaxGlobal: data.numContMaxGlobal,
            numContMaxUser: data.numContMaxUser
        };
    }

    setShowLists(data: any) {
        return {
            dashboard: {
                showLatestsJobs: data.dashboard.showLatestsJobs,
                showJobsRunning: data.dashboard.showJobsRunning
            },
            dataset: {
                showDatasets: data.dataset.showDatasets
            },
            job: {
                showJobs: data.job.showJobs
            }
        };
    }
}
