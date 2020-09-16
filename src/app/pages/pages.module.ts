import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';




@NgModule({
  declarations: [
    SimpleTablesComponent,
    DataTablesComponent,
    DashboardComponent,
    PagesComponent,
  ],
  exports:[
    SimpleTablesComponent,
    DataTablesComponent,
    DashboardComponent,
    PagesComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
