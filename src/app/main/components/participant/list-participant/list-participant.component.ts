import { CustomDynamicDialogService } from './../../../service/custom-dynamic-dialog.service';
import { Component, ViewChild } from '@angular/core';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Menu } from 'primeng/menu';
import { Participant } from 'src/app/main/api/participant';
import { ParticipantService } from 'src/app/main/service/participant.service';
import { ParticipantTicketsComponent } from '../participant-tickets/participant-tickets.component';
import { DialogSize } from 'src/app/main/enum/dialog-size';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrl: './list-participant.component.scss'
})
export class ListParticipantComponent {
  records: Participant[] = [];
  selectedRecords: Participant[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  deleteConfirmed: boolean = false;
  selectedRecord!: Participant;
  recordMenuItems!: MenuItem[];
  @ViewChild('recordMenu') recordMenu: Menu;

  constructor(private participantService: ParticipantService, private messageService: MessageService, private confirmationService: ConfirmationService, private customDynamicDialogService: CustomDynamicDialogService) {}

  ngOnInit() {
    this.loadData();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'email', header: 'Email' },
      { field: 'phone_number', header: 'Telefone' }
    ];

    this.recordMenuItems = [
      {
        label: 'Bilhetes', 
        icon: 'pi pi-fw pi-ticket',
        command: () => {
          this.openParticipantTicketsDialog(this.selectedRecord.id);
        }
      }
    ];
  }

  loadData(): void {
    this.participantService.list().subscribe({
      next: (data: Participant[]) => {
        this.records = data;

        this.isLoading = false;
      }
    });
  }

  deleteSelectedRecords(event: Event): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      target: event.target || new EventTarget,
      message: `Deseja mesmo deletar os registros selecionados?`,
      icon: 'pi pi-exclamation-triangle',
      header: 'Atenção',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.selectedRecords.forEach(record => {
          this.participantService.delete(record.id).subscribe(
            () => {
              this.records = this.records.filter(val => val.id !== record.id);
            }
          );
        });

        this.messageService.add({
          severity: 'success', 
          summary: 'Sucesso', 
          detail: 'Registros deletados.', 
          life: 5000 
        });
      }
    });
  }

  deleteRecord(event: Event, record: any): void {
    this.confirmationService.confirm({
      key: 'confirmDeleteDialog',
      target: event.target || new EventTarget,
      message: `Deseja mesmo deletar o registro de ID <b>${record.id}</b>?`,
      icon: 'pi pi-exclamation-triangle',
      header: 'Atenção',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        this.participantService.delete(record.id).subscribe(
          () => {
            this.records = this.records.filter(val => val.id !== record.id);
            this.messageService.add({
              severity: 'success', 
              summary: 'Sucesso', 
              detail: 'Registro deletado.', 
              life: 5000 
            });
          }
        );
      }
    });
  }

  openRecordMenu(event: Event, record: Participant) {
    this.selectedRecord = record;
    this.recordMenu.toggle(event);
  }

  openParticipantTicketsDialog(participantId: number) {
    const data = { 
      participantId: participantId
    };

    this.customDynamicDialogService.openDialog<void>(ParticipantTicketsComponent, 'Bilhetes', data, DialogSize.Small);
  }
}
