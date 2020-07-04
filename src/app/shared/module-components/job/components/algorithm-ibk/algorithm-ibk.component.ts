import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ibk } from '../../entities/algorithms/ibk/ibk';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api/selectitem';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-algorithm-ibk',
  templateUrl: './algorithm-ibk.component.html',
  styleUrls: ['./algorithm-ibk.component.css']
})
export class AlgorithmIBKComponent implements OnInit {

  ibkForm: FormGroup;
  ibk: Ibk;
  btnRestart = true;

  optionsDistanceWeighting: SelectItem[];
  optionsNearestNeighbourSearchAlgorithm: SelectItem[];
  optionsValidation: SelectItem[];

  @Input('ibk') set setLinearRegression(ibk: Ibk) {
    if (ibk) {
      this.ibkForm.patchValue({
        windowSize: ibk.config.windowSize === '1' ? true : false,
        KNN: ibk.config.KNN,
        crossValidate: ibk.config.crossValidate === '1' ? true : false,
        distanceWeighting: ibk.config.distanceWeighting,
        meanSquared: ibk.config.meanSquared === '1' ? true : false,
        nearestNeighbourSearchAlgorithm: ibk.config.nearestNeighbourSearchAlgorithm,
        validation: ibk.config.validation,
        validationNum: ibk.config.validationNum
      });
      this.ibk = ibk;
    }
  }

  @Output() changeIbk = new EventEmitter<Ibk>();

  constructor(private fb: FormBuilder,
              public translate: TranslateService) {
    this.initForm();
    this.ibk = new Ibk();
    this.optionsDistanceWeighting = [
      { label: 'No distance weighting', value: '0' },
      { label: '1/distance', value: 'I' },
      { label: '1-distance', value: 'F' }
    ];
    this.optionsNearestNeighbourSearchAlgorithm = [
      { label: 'Ball Tree', value: 'BallTree' },
      { label: 'Cover Tree', value: 'CoverTree' },
      { label: 'Filtered Neighbour Search', value: 'FilteredNeighbourSearch' },
      { label: 'KDTree', value: 'KDTree' },
      { label: 'Linear NN Search', value: 'LinearNNSearch' },
      { label: 'Nearest Neighbour Search', value: 'NearestNeighbourSearch' },
      { label: 'Performance Stats', value: 'PerformanceStats' },
      { label: 'Tree Performance Stats', value: 'TreePerformanceStats' },
    ];
    this.optionsValidation = [
      { label: 'Cross Validation', value: 'CrossValidation' },
      { label: 'Hold-Out', value: 'Hold-Out' }
    ];
   }

  ngOnInit() {
  }

  emitForm() {
    this.ibk.config.windowSize = this.ibkForm.value.windowSize === true ? '1' : '0';
    this.ibk.config.KNN = this.ibkForm.value.KNN.toString();
    this.ibk.config.crossValidate = this.ibkForm.value.crossValidate === true ? '1' : '0';
    this.ibk.config.distanceWeighting = this.ibkForm.value.distanceWeighting;
    this.ibk.config.meanSquared = this.ibkForm.value.meanSquared === true ? '1' : '0';
    this.ibk.config.nearestNeighbourSearchAlgorithm = this.ibkForm.value.nearestNeighbourSearchAlgorithm;
    this.ibk.config.validation = this.ibkForm.value.validation;
    this.ibk.config.validationNum = this.ibkForm.value.validationNum.toString();
    this.changeIbk.emit(this.ibk);
  }

  initForm() {
    this.ibkForm = this.fb.group({
      windowSize: [false],
      KNN: ['1'],
      crossValidate: [false],
      distanceWeighting: ['0'],
      meanSquared: [false],
      nearestNeighbourSearchAlgorithm: ['LinearNNSearch'],
      validation: ['CrossValidation'],
      validationNum: ['10']
    });
    // Form change emit
    this.ibkForm.valueChanges.subscribe(data => {
      this.emitForm();
      this.btnRestart = false;
    });
  }

  restart() {
    this.initForm();
    this.emitForm();
    this.btnRestart = true;
  }

}
