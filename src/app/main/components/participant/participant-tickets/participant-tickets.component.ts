import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Ticket } from 'src/app/main/api/ticket';
import { ParticipantService } from 'src/app/main/service/participant.service';

@Component({
  selector: 'app-participant-tickets',
  templateUrl: './participant-tickets.component.html',
  styleUrl: './participant-tickets.component.scss'
})
export class ParticipantTicketsComponent implements OnInit {
  participantId!: number;
  records: Ticket[] = [];
  isLoading: boolean = true;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef, private participantService: ParticipantService) {
    this.participantId = this.config.data?.participantId;
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.participantService.listTickets(this.participantId).subscribe({
      next: (data: Ticket[]) => {
        this.records = data;
        this.isLoading = false;
        console.log(this.records);
      }
    });
  }
}
