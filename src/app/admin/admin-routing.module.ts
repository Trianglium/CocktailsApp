import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SettingsComponent } from './settings/settings.component';
import { InfoComponent } from './info/info.component';



const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'home',
                component: AdminHomeComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            },
            {
                path: 'info',
                component: InfoComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AdminRoutingModule { }
