import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user/user.service';
import { ListUsers } from '../../entities/list-users';
import { HttpErrorService } from '../../../core/services/http-error/http-error.service';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-controller-list-user',
  templateUrl: './controller-list-user.component.html',
  styleUrls: ['./controller-list-user.component.css']
})
export class ControllerListUserComponent implements OnInit {

  nameSearch = '';
  emailSearch = '';
  page: number;
  limit: number;
  listUsers: ListUsers;

  createUserModal = false;


  constructor(private userService: UserService,
              private httpError: HttpErrorService,
              public translate: TranslateService) {
    this.page = 1;
    this.limit = 4;
    this.listUsers = new ListUsers();
   }

  ngOnInit() {
    this.getListUsers();
  }

  getListUsers() {
    this.petitionListUsers(this.page, this.limit, this.nameSearch, this.emailSearch);
  }

  petitionListUsers(page: number, limit: number, nameSearch: string, emailSearch: string) {
    this.userService.getListUsers(page, limit, nameSearch, emailSearch).subscribe(
      listUsers => {
        this.listUsers = listUsers;
      },
      err => {
        this.httpError.checkError(err,
          this.translate.instant('alerts.alert'),
          this.translate.instant('controllerListUser.messageErrorGetListUser'));
      }
  );
  }

  // SEARCH
  search(forma: NgForm) {
    this.page = 1;
    this.nameSearch = forma.value.nameSearch;
    this.emailSearch = forma.value.emailSearch;
    this.getListUsers();
  }

  keypressNameSearch(name: string) {
    if (name !== '') { this.emailSearch = ''; }
  }

  keypressEmailSearch(email: string) {
    if (email !== '') { this.nameSearch = ''; }
  }

  clearSearch() {
    this.nameSearch = '';
    this.emailSearch = '';
    this.changePage(1);
  }

  // PAGINATION
  changePage(page: number) {
    this.page = page;
    this.getListUsers();
  }

  // MODAL
  openCreateUserModal() {
    this.createUserModal = true;
  }

  closeCreateUserModal() {
    this.createUserModal = false;
  }

}
