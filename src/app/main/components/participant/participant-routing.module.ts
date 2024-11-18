import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-participant/list-participant.module').then(m => m.ListParticipantModule) }
  ])],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
