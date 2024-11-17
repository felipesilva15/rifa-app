import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRaffleComponent } from './list-raffle.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListRaffleComponent }
  ])],
  exports: [RouterModule]
})
export class ListRaffleRoutingModule { }
