import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ListDatasets } from '../../entities/list-datasets';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { Dataset } from '../../entities/dataset';
import { MessageService } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { TranslateService } from '@ngx-translate/core';

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

  mode: number;

  @Input() clickCard = false;
  @Input() showCardButtons = true;

  @Output() emitDataset = new EventEmitter<Dataset>();

  constructor(private datasetService: DatasetService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              private globalConfigService: GlobalConfigService,
              public translate: TranslateService) {
    // this.descriptionSearch = '';
    this.page = 1;
    this.limit = this.globalConfigService.getGlobalConfigSessionStorage().showLists.dataset.showDatasets;
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
        if (listDataset.datasets.length <= 0 && listDataset.paginationData && listDataset.paginationData.hasPrevPage) {
          this.page = listDataset.paginationData.prevPage;
          this.getListDatasets();
        } else {
          this.listDataset = listDataset;
        }
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListDataset.msgAlertErrorGetListDataset'));
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

  removed(dataset: Dataset) {
    this.getListDatasets();
  }

  changePage(page: number) {
    this.page = page;
    this.getListDatasets();
  }

}
