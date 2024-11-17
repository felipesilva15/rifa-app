import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRaffleRoutingModule } from './list-raffle-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ListRaffleComponent } from './list-raffle.component';


@NgModule({
  declarations: [ListRaffleComponent],
  imports: [
    CommonModule,
    ListRaffleRoutingModule,
    ButtonModule,
    RippleModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    ConfirmDialogModule,
    SkeletonModule
  ],
  exports: [ListRaffleComponent]
})
export class ListRaffleModule { }
