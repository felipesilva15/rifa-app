import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', loadChildren: () => import('./list-participant/list-participant.module').then(m => m.ListParticipantModule) },
    { path: 'form/:id', loadChildren: () => import('./form-participant/form-participant.module').then(m => m.FormParticipantModule) },
    { path: 'form', loadChildren: () => import('./form-participant/form-participant.module').then(m => m.FormParticipantModule) }
  ])],
  exports: [RouterModule]
})
export class ParticipantRoutingModule { }
