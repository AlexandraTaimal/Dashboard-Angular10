import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SimpleTablesComponent } from './simple-tables/simple-tables.component';
import { DataTablesComponent } from './data-tables/data-tables.component';
import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children:[

    { path: '', component: DashboardComponent, data: { title: 'Dashboard'} },
    { path: 'simple-tables', component: SimpleTablesComponent, data: { title: 'Simple Tables'}  },
    { path: 'data-tables', component: DataTablesComponent, data: { title: 'Data Tables'}  },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
