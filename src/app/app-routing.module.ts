import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth/auth.guard';
import { LoginComponent } from './core/components/login/login.component';
import { DashboardPageComponent } from './dashboard/dashboard-page/dashboard-page.component';
import { LaunchJobPageComponent } from './job/launch-job-page/launch-job-page.component';
import { JobListPageComponent } from './job/job-list-page/job-list-page.component';
import { DatasetsUploadPageComponent } from './datasets/datasets-upload-page/datasets-upload-page.component';
import { DatasetsListPageComponent } from './datasets/datasets-list-page/datasets-list-page.component';
import { ContainerListPageComponent } from './docker/container-list-page/container-list-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]  },
  { path: 'launch-job', component: LaunchJobPageComponent, canActivate: [AuthGuard] },
  { path: 'job-list', component: JobListPageComponent, canActivate: [AuthGuard] },
  { path: 'datasets-upload', component: DatasetsUploadPageComponent, canActivate: [AuthGuard] },
  { path: 'datasets-list', component: DatasetsListPageComponent, canActivate: [AuthGuard] },
  { path: 'container-list', component: ContainerListPageComponent, canActivate: [AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
