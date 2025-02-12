import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchFormTicketComponent } from './batch-form-ticket.component';

const routes: Routes = [
  { path: '', component: BatchFormTicketComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchFormTicketRoutingModule { }
