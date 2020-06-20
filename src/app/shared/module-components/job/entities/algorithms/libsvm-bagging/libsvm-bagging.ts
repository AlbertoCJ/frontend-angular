import { Algorithms } from '../../../enums/algorithms.enum';
export class LibsvmBagging {

    id: number;
    name: string;
    endpoint: string;
    config: any;
    status: string;
    errorList: string[];

    constructor(data?: any) {
        this.id = data && data.id ? data.id : Algorithms.LIBSVM_BAGGING;
        this.name = data && data.name ? data.name : 'Libsvm Bagging';
        this.endpoint = data && data.endpoint ? data.endpoint : 'libsvm/bagging';
        this.config = data && data.config ? data.config : this.dataConfig();
        this.status = data && data.status ? data.status : 'OK';
        this.errorList = data && data.errorList ? data.errorList : [];
    }

    dataConfig() {
        return {
            bagSizePercent: '100', // Bagging: Size of each bag, as a percentage of the training set size.
            batchSize: '100', /* Bagging: The preferred number of instances to process if batch prediction is
                                being performed. More or fewer instances may be provided, but this gives implementations a
                                chance to specify a preferred batch size. */
            numIterations: '10', // Bagging: The number of iterations to be performed.
            svmType: '3', // SVMType -- The type of SVM to use. \n 3: epsilon-SVR (regression)\n 4: nu-SVR (regression)\n (Default: 3).
            coef0: '0', // coef0 -- The coefficient to use. (Default: 0).
            cost: '1.0', // cost -- The cost parameter C for C-SVC, epsilon-SVR and nu-SVR. (Default: 1.0).
            degree: '3', // degree -- The degree of the kernel. (Default: 3).
            eps: '0.001', // eps -- The tolerance of the termination criterion. (Default: 0.001).
            gamma: '0.0', // gamma -- The gamma to use, if 0 then 1/max_index is used. (Default: 0.0).
            kernelType: '2', // kernelType -- The type of kernel to use.\n 0: linear:u'*v \n 1: polynomial: (gamma*u'*v + coef0)^degree
                             // \n 2: radial basis function: exp(-gamma*|u-v|^2) \n 3: sigmoid: tanh()gamma*u'*v + coef0) \n (Default: 2).
            loss: '0.1', // loss -- The epsilon for the loss function in epsilon-SVR. (Default: 0.1).
            normalize: 'false', // normalize -- Whether to normalize the data.
            nu: '0.5', // nu -- The value of nu for nu-SVC, one-class SVM and nu-SVR. (Default: 0.5).
            probabilityEstimates: 'false', // probabilityEstimates -- Whether to generate probability estimates
                                           // instead of -1/+1 for classification problems.
            shrinking: 'true', // shrinking -- Whether to use the shrinking heuristic.
            validation: 'CrossValidation', // "CrossValidation" y "Hold-Out"
            validationNum: '10' // min = 0, max = 100
        };
    }
}
