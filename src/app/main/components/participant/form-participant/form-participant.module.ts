import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormParticipantRoutingModule } from './form-participant-routing.module';
import { FormParticipantComponent } from './form-participant.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [FormParticipantComponent],
  imports: [
    CommonModule,
    FormParticipantRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    InputMaskModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule
  ],
  exports: [FormParticipantComponent]
})
export class FormParticipantModule { }
