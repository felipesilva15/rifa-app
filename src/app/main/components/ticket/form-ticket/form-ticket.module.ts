import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTicketRoutingModule } from './form-ticket-routing.module';
import { FormTicketComponent } from './form-ticket.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [FormTicketComponent],
  imports: [
    CommonModule,
    FormTicketRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    CalendarModule,
    DropdownModule
  ],
  exports: [FormTicketComponent]
})
export class FormTicketModule { }
