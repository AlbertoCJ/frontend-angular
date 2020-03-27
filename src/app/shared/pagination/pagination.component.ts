import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListDatasets } from '../module-components/datasets/entities/list-datasets';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page: number;

  @Input() listDataset: ListDatasets;

  @Output() emitPage = new EventEmitter<number>();

  constructor() {
    this.page = 1;
  }

  ngOnInit() {
  }

  paginate(event) {
    const eventPage = event.page + 1;
    if (this.page !== eventPage) {
      this.page = eventPage;
      this.emitPage.emit(this.page);
    }
  }

}
