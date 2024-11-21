import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListTicketRoutingModule } from './list-ticket-routing.module';
import { ListTicketComponent } from './list-ticket.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule } from 'primeng/skeleton';


@NgModule({
  declarations: [ListTicketComponent],
  imports: [
    CommonModule,
    ListTicketRoutingModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    SkeletonModule
  ],
  exports: [ListTicketComponent]
})
export class ListTicketModule { }
