import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'details/:ticketId',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
