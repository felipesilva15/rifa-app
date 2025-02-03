import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SkeletonModule } from 'primeng/skeleton';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SkeletonModule,
    ChartModule
  ]
})
export class DashboardModule { }
