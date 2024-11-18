import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListParticipantComponent } from './list-participant.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: ListParticipantComponent }
  ])],
  exports: [RouterModule]
})
export class ListParticipantRoutingModule { }
