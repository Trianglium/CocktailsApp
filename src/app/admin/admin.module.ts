import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import {MatIconModule} from '@angular/material/icon';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';


@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    DashboardComponent,
    AdminHomeComponent,
    SettingsComponent,
    InfoComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    AdminRoutingModule,
    MatIconModule
    
  ],
  providers: []
})
export class AdminModule { }
