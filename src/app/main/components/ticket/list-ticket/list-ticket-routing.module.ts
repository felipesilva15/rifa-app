import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTicketComponent } from './list-ticket.component';

const routes: Routes = [
  { path: '', component: ListTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTicketRoutingModule { }
