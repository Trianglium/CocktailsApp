import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule
  ],
  providers: []
})
export class AdminModule { }
