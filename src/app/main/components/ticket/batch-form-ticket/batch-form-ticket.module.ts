import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchFormTicketRoutingModule } from './batch-form-ticket-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { BatchFormTicketComponent } from './batch-form-ticket.component';
import { InputNumberModule } from 'primeng/inputnumber';


@NgModule({
  declarations: [BatchFormTicketComponent],
  imports: [
    CommonModule,
    BatchFormTicketRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    CalendarModule,
    DropdownModule,
    ChipsModule
  ],
  exports: [BatchFormTicketComponent]
})
export class BatchFormTicketModule { }
