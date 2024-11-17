import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-raffle/list-raffle.module').then(m => m.ListRaffleModule) },
  ])],
  exports: [RouterModule]
})
export class RaffleRoutingModule { }
