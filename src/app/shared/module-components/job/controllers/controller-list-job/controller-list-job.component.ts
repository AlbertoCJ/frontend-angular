import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../entities/job';
import { JobService } from '../../../../../core/services/job/job.service';
import { MessageService } from 'primeng/api';
import { AlertService } from '../../../../../core/services/alert/alert.service';
import { ListJob } from '../../entities/list-job';
import { NgForm } from '@angular/forms';

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
              private alertService: AlertService) {
    // this.descriptionSearch = '';
    this.page = 1;
    this.limit = 2;
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
        this.listJob = listJob;
      },
      err => {
        this.alertService.setAlertShowMore('Alerta', 'Error al obtener listado de jobs', err.message);
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

  remove(job: Job) {
    this.jobService.deleteJob(job.id).subscribe(
      job => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente'});
        this.getListJobs();
      },
      err => {
          this.alertService.setAlertShowMore('Alerta', 'Error al borrar job', err.message);
          this.getListJobs();
      }
    );
  }

  changePage(page: number) {
    this.page = page;
    this.getListJobs();
  }

}
