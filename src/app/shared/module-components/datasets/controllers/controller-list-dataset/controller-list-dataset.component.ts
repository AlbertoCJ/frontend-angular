import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ListDatasets } from '../../entities/list-datasets';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { Dataset } from '../../entities/dataset';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-controller-list-dataset',
  templateUrl: './controller-list-dataset.component.html',
  styleUrls: ['./controller-list-dataset.component.css']
})
export class ControllerListDatasetComponent implements OnInit {

  page: number;
  limit: number;
  listDataset: ListDatasets;

  @Input() clickCard = false;

  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor(private datasetService: DatasetService,
              private messageService: MessageService,
              private alertService: AlertService) {
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
      err => {
          this.alertService.setAlertShowMore('Alerta', 'Error al obtener listado de datasets', err.message);
      }
  );
  }

  select(dataset: Dataset) {
    this.emitDataset.emit(dataset);
  }

  remove(dataset: Dataset) {
    this.datasetService.deleteDataset(dataset.id).subscribe(
      dataset => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente'});
        this.getListDatasets(this.page, this.limit);
      },
      err => {
          this.alertService.setAlertShowMore('Alerta', 'Error al borrar dataset', err.message);
          this.getListDatasets(this.page, this.limit);
      }
    );
  }

  changePage(page: number) {
    this.page = page;
    this.getListDatasets(this.page, this.limit);
  }

}
