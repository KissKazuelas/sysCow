import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    TestComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    SharedModule,
  ]
})
export class AdminModule { }
