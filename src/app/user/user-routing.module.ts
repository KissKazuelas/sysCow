import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../admin/pages/dashboard/dashboard.component';
import { HomeComponent } from '../admin/pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children: [
      {path:'dashboard',component: DashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
