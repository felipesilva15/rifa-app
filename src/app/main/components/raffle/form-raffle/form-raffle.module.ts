import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRaffleRoutingModule } from './form-raffle-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { FormRaffleComponent } from './form-raffle.component';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [FormRaffleComponent],
  imports: [
    CommonModule,
    FormRaffleRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule,
    CalendarModule
  ],
  exports: [FormRaffleComponent]
})
export class FormRaffleModule { }
