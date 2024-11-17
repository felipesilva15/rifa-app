import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-raffle/list-raffle.module').then(m => m.ListRaffleModule) },
    { path: 'form/:id', loadChildren: () => import('./form-raffle/form-raffle.module').then(m => m.FormRaffleModule) },
    { path: 'form', loadChildren: () => import('./form-raffle/form-raffle.module').then(m => m.FormRaffleModule) }
  ])],
  exports: [RouterModule]
})
export class RaffleRoutingModule { }
