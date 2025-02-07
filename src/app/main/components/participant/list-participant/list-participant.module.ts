import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListParticipantRoutingModule } from './list-participant-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SkeletonModule } from 'primeng/skeleton';
import { ListParticipantComponent } from './list-participant.component';
import { PhonePipe } from 'src/app/main/pipes/phone.pipe';
import { MenuModule } from 'primeng/menu';
import { ParticipantTicketsModule } from '../participant-tickets/participant-tickets.module';


@NgModule({
  declarations: [ListParticipantComponent],
  imports: [
    CommonModule,
    ListParticipantRoutingModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    MenuModule,
    SkeletonModule,
    PhonePipe,
    ParticipantTicketsModule
  ],
  exports: [ListParticipantComponent]
})
export class ListParticipantModule { }
