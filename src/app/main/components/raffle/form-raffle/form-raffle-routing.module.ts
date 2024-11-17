import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormRaffleComponent } from './form-raffle.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: FormRaffleComponent }
  ])],
  exports: [RouterModule]
})
export class FormRaffleRoutingModule { }
