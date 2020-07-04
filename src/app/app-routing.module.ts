import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { UserRoleGuard } from './core/guards/user-role/user-role.guard';
import { AdminRoleGuard } from './core/guards/admin-role/admin-role.guard';
import { LoginComponent } from './core/components/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LaunchJobPageComponent } from './job/launch-job-page/launch-job-page.component';
import { JobListPageComponent } from './job/job-list-page/job-list-page.component';
import { DatasetsUploadPageComponent } from './datasets/datasets-upload-page/datasets-upload-page.component';
import { DatasetsListPageComponent } from './datasets/datasets-list-page/datasets-list-page.component';
import { ContainerListPageComponent } from './docker/container-list-page/container-list-page.component';
import { JobDetailsPageComponent } from './job/job-details-page/job-details-page.component';
import { AdministrationUsersPageComponent } from './administration/administration-users-page/administration-users-page.component';
import { AdministrationConfigPageComponent } from './administration/administration-config-page/administration-config-page.component';
import { ContainerAWSListPageComponent } from './docker-aws/container-awslist-page/container-awslist-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard, UserRoleGuard]  },
  { path: 'launch-job', component: LaunchJobPageComponent, canActivate: [AuthGuard, UserRoleGuard] },
  { path: 'job-list', component: JobListPageComponent, canActivate: [AuthGuard, UserRoleGuard] },
  { path: 'job/:id', component: JobDetailsPageComponent, canActivate: [AuthGuard, UserRoleGuard] },
  { path: 'datasets-upload', component: DatasetsUploadPageComponent, canActivate: [AuthGuard, UserRoleGuard] },
  { path: 'datasets-list', component: DatasetsListPageComponent, canActivate: [AuthGuard, UserRoleGuard] },
  { path: 'administration-users', component: AdministrationUsersPageComponent, canActivate: [AuthGuard, AdminRoleGuard] },
  { path: 'configurations', component: AdministrationConfigPageComponent, canActivate: [AuthGuard, AdminRoleGuard] },
  { path: 'container-list', component: ContainerListPageComponent, canActivate: [AuthGuard, AdminRoleGuard] },
  { path: 'container-list-aws', component: ContainerAWSListPageComponent, canActivate: [AuthGuard, AdminRoleGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
