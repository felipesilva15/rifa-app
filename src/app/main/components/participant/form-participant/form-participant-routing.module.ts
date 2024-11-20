import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormParticipantComponent } from './form-participant.component';

const routes: Routes = [
  { path: '', component: FormParticipantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormParticipantRoutingModule { }
