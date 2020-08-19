import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { ListJob } from '../../entities/list-job';
import { NgForm } from '@angular/forms';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';
import { GlobalConfigService } from '../../../../../core/services/global-config/global-config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-list-job',
  templateUrl: './controller-list-job.component.html',
  styleUrls: ['./controller-list-job.component.css']
})
export class ControllerListJobComponent implements OnInit {

  nameSearch = '';
  descriptionSearch = '';
  page: number;
  limit: number;
  listJob: ListJob;

  @Input() clickCard = false;
  @Input() showCardButtons = true;

  @Output() emitViewJob = new EventEmitter<Job>();
  @Output() emitEditJob = new EventEmitter<Job>();

  constructor(private jobService: JobService,
              private messageService: MessageService,
              private httpError: HttpErrorService,
              private globalConfigService: GlobalConfigService,
              public translate: TranslateService) {
    this.page = 1;
    this.limit = this.globalConfigService.getGlobalConfigSessionStorage().showLists.job.showJobs;
    this.listJob = new ListJob();
  }

  ngOnInit() {
    this.getListJobs();
  }

  getListJobs() {
    this.petitionListJobs(this.page, this.limit, this.nameSearch, this.descriptionSearch);
  }

  petitionListJobs(page: number, limit: number, nameSearch: string, descriptionSearch: string) {
    this.jobService.getListJobs(page, limit, nameSearch, descriptionSearch).subscribe(
      listJob => {
        if (listJob.jobs.length <= 0 && listJob.paginationData && listJob.paginationData.hasPrevPage) {
          this.page = listJob.paginationData.prevPage;
          this.getListJobs();
        } else {
          this.listJob = listJob;
        }
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListJob.msgAlertErrorGetListJob'));
      }
    );
  }

  search(forma: NgForm) {
    this.page = 1;
    this.nameSearch = forma.value.nameSearch;
    this.descriptionSearch = forma.value.descriptionSearch;
    this.getListJobs();
  }

  keypressNameSearch(name: string) {
    if (name !== '') { this.descriptionSearch = ''; }
  }

  keypressDescriptionSearch(description: string) {
    if (description !== '') { this.nameSearch = ''; }
  }

  clearSearch() {
    this.page = 1;
    this.nameSearch = '';
    this.descriptionSearch = '';
    this.getListJobs();
  }

  select(job: Job) {
    this.emitViewJob.emit(job);
  }

  edit(job: Job) {
    this.emitEditJob.emit(job);
  }

  removed(job: Job) {
    this.getListJobs();
  }

  changePage(page: number) {
    this.page = page;
    this.getListJobs();
  }

}
