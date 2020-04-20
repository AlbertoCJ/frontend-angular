import { Component, Input, OnDestroy, ViewChild, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
// import { ModalsManagerService } from '../../../core/services/modals-manager.service';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-modal-generic',
  templateUrl: './modal-generic.component.html',
  styleUrls: ['./modal-generic.component.scss']
})
export class ModalGenericComponent implements OnInit, OnDestroy {

  isModalActive: boolean;
  isFullModal: boolean;
  // zIndex: number;
  id: string;
  style: any;

  // @Input() isModalActive = true;
  @Input() closable = true;
  @Input('isModalActive') set modalActive(value: boolean) {
    if (value !== undefined && value === true) {
      this.isModalActive = true;
    } else if (value !== undefined && value === false) {
      this.isModalActive = false;
    }
  }
  @Input() showHeader = true;
  @Input() showSection = true;
  @Input() showFooter = true;
  @Input() set size(value: string | number) {
    if (typeof value === 'number') {
      let valueValid: number;
      value > 100 ? valueValid = 100 : valueValid = value ;
      value < 0 ? valueValid = 0 : valueValid = value ;
      this.style = { width: `${ value }vw` };
    } else {
      const transformAllowed = ['small', 'large', 'xlarge'];
      if (transformAllowed.indexOf(value) >= 0) {
        switch(value) {
          case 'small':
            this.style = { width: '35vw' };
            break;
          case 'xlarge':
            this.style = { width: '75vw' };
            break;
          default:
            this.defaultStyle();
        }
      }
    }
  }
  @Input('fullModal') set setFullModal(fullModal: boolean) {
    if (fullModal) {
      // document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
      this.isFullModal = true;
    }
  }
  // @Input('modalId') set setModalId(id: string) {
  //   if (id) {
  //     this.id = id;
  //   }
  // }

  @Output() closed = new EventEmitter<boolean>();

  constructor() {
    this.isModalActive = true;
    this.isFullModal = false;
  }

  ngOnInit() {
    // if (this.id) {
    //   if (!this.modalManager.isModalOpen(this.id)) {
    //     this.modalManager.setModalId(this.id);
    //   } else {
    //     this.closed.emit(true);
    //   }
    // }
    // // this.zIndex = this.modalManager.nextZIndex();
  }

  ngOnDestroy() {
    this.isModalActive = false;
    // if (this.id) {
    //   this.modalManager.removeModalId(this.id);
    // }
    // if (this.isFullModal) {
    //   // document.getElementsByTagName('html')[0].style.overflowY = 'auto';
    // }
  }

  defaultStyle() {
    this.style = { width: '50vw' };
  }

  showDialogMaximized(dialog: Dialog) {
    if (this.isFullModal) {
      dialog.maximized = false;
      dialog.maximize();
    } else {
      if (!this.style) {
        this.defaultStyle();
      }
    }
  }

  hideDialog() {
    this.closed.emit(true);
  }

}
