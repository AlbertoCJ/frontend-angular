import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ListDatasets } from '../../entities/list-datasets';
import { DatasetService } from '../../../core/services/dataset/dataset.service';
import { Dataset } from '../../entities/dataset';

@Component({
  selector: 'app-controller-list-dataset',
  templateUrl: './controller-list-dataset.component.html',
  styleUrls: ['./controller-list-dataset.component.css']
})
export class ControllerListDatasetComponent implements OnInit {

  page: number;
  limit: number;
  listDataset: ListDatasets;

  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor(private datasetService: DatasetService) {
    this.page = 1;
    this.limit = 2;
    this.listDataset = new ListDatasets();
  }

  ngOnInit() {
    this.getListDatasets(this.page, this.limit);
  }

  getListDatasets(page: number, limit: number) {
    this.datasetService.getListDataset(page, limit).subscribe(
      listDataset => {
        this.listDataset = listDataset;
      },
      error => {
          console.log(error); // TODO: mostrar modal error.
      }
  );
  }

  // TODO: Metodo para seleccionar dataset y emitirlo.

}
