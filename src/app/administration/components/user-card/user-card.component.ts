import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../core/entities/user/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  editUserModal = false;
  changePassUserModal = false;

  @Input() showButtons = true;
  @Input() isClicker = false;
  @Input() user: User;

  constructor() { }

  ngOnInit() {
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
