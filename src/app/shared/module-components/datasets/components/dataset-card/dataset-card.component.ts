import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dataset } from '../../entities';
import { ViewMode } from '../../../../../core/enums/view-mode.enum';
import { DatasetService } from '../../../../../core/services/dataset/dataset.service';
import { MessageService } from 'primeng/api';
import { HttpErrorService } from '../../../../../core/services/http-error/http-error.service';

@Component({
  selector: 'app-dataset-card',
  templateUrl: './dataset-card.component.html',
  styleUrls: ['./dataset-card.component.css']
})
export class DatasetCardComponent implements OnInit {

  // Confirm
  isConfirmActive = false;
  titleConfirm = 'Aviso'; // TODO: Traducir
  messageConfirm = 'Se eliminara permanentemente. ¿Estás seguro?'; // TODO: Traducir

  public viewMode = ViewMode;
  descriptionAux: string;

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input() dataset: Dataset;
  @Input() mode = ViewMode.VIEW;

  @Output() emitSelected = new EventEmitter<Dataset>();
  @Output() emitRemoved = new EventEmitter<Dataset>();
  @Output() emitSaved = new EventEmitter<Dataset>();

  constructor(private datasetService: DatasetService,
              private messageService: MessageService,
              private httpError: HttpErrorService) { }

  ngOnInit() {
  }

  select() {
    this.emitSelected.emit(this.dataset);
  }

  edit() {
    this.descriptionAux = this.dataset.description;
    this.mode = ViewMode.EDIT;
  }

  update() {
    this.datasetService.updateDataset(this.dataset).subscribe(
      dataset => {
        this.mode = ViewMode.VIEW;
        this.messageService.add({severity: 'success', detail: 'Guardado correctamente'}); // TODO: Traducir
        this.emitSaved.emit(dataset);
      },
      err => {
        this.mode = ViewMode.EDIT;
        this.httpError.checkError(err, 'Alerta', 'Error al guardar dataset'); // TODO: Traducir
      }
    );
  }

  cancelUpdate() {
    this.dataset.description = this.descriptionAux;
    this.mode = ViewMode.VIEW;
  }

  // Confirm
  removeConfirm() {
    this.isConfirmActive = true;
  }

  remove() {
    this.datasetService.deleteDataset(this.dataset.id).subscribe(
      dataset => {
        this.messageService.add({severity: 'success', detail: 'Eliminado correctamente'});
        this.emitRemoved.emit(dataset);
      },
      err => {
        this.httpError.checkError(err, 'Alerta', 'Error al borrar dataset'); // TODO: Traducir
      }
    );
    this.isConfirmActive = false;
  }

  removeCancel() {
    this.isConfirmActive = false;
  }

}
