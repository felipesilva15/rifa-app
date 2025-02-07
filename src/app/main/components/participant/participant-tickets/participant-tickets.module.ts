import { ParticipantTicketsComponent } from './participant-tickets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [ParticipantTicketsComponent],
  imports: [
    CommonModule,
    TableModule,
    SkeletonModule
  ],
  exports: [ParticipantTicketsComponent]
})
export class ParticipantTicketsModule { }
