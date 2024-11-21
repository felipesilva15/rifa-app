import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./list-ticket/list-ticket.module').then(m => m.ListTicketModule) },
  { path: 'form/:id', loadChildren: () => import('./form-ticket/form-ticket.module').then(m => m.FormTicketModule) },
  { path: 'form', loadChildren: () => import('./form-ticket/form-ticket.module').then(m => m.FormTicketModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
