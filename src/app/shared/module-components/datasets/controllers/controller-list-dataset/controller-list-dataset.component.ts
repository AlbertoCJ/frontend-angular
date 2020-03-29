import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ListDatasets } from '../../entities/list-datasets';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { Dataset } from '../../entities/dataset';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-controller-list-dataset',
  templateUrl: './controller-list-dataset.component.html',
  styleUrls: ['./controller-list-dataset.component.css']
})
export class ControllerListDatasetComponent implements OnInit {

  descriptionSearch = '';
  page: number;
  limit: number;
  listDataset: ListDatasets;

  @Input() clickCard = false;
  @Input() showCardButtons = true;

  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor(private datasetService: DatasetService,
              private messageService: MessageService,
              private alertService: AlertService) {
    // this.descriptionSearch = '';
    this.page = 1;
    this.limit = 2;
    this.listDataset = new ListDatasets();
  }

  ngOnInit() {
    this.getListDatasets();
  }

  getListDatasets() {
    this.petitionListDatasets(this.page, this.limit, this.descriptionSearch);
  }

  petitionListDatasets(page: number, limit: number, descriptionSearch: string) {
    this.datasetService.getListDataset(page, limit, descriptionSearch).subscribe(
      listDataset => {
        this.listDataset = listDataset;
      },
      err => {
        this.alertService.setAlertShowMore('Alerta', 'Error al obtener listado de datasets', err.message);
      }
  );
  }

  search(forma: NgForm) {
    this.page = 1;
    this.descriptionSearch = forma.value.descriptionSearch;
    this.getListDatasets();
  }

  clearDescriptionSearch() {
    this.page = 1;
    this.descriptionSearch = '';
    this.getListDatasets();
  }

  select(dataset: Dataset) {
    this.emitDataset.emit(dataset);
  }

  remove(dataset: Dataset) {
    this.datasetService.deleteDataset(dataset.id).subscribe(
      dataset => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente'});
        this.getListDatasets();
      },
      err => {
          this.alertService.setAlertShowMore('Alerta', 'Error al borrar dataset', err.message);
          this.getListDatasets();
      }
    );
  }

  changePage(page: number) {
    this.page = page;
    this.getListDatasets();
  }

}
