import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../core/entities/user/user';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  // Modal
  timeModal = false;
  // Modal Edit User
  editUserModal = false;
  // Modal Change Pass
  changePassUserModal = false;

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input() user: User;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  // Modal time
  openTimeModal() {
    this.timeModal = true;
  }

  closeTimeModal(event: boolean) {
    this.timeModal = event;
  }

  // Modal manager methods
  openEditUserModal() {
    this.editUserModal = true;
  }

  closeEditUserModal() {
    this.editUserModal = false;
  }

  openChangePassUserModal() {
    this.changePassUserModal = true;
  }

  closeChangePassUserModal() {
    this.changePassUserModal = false;
  }

}
