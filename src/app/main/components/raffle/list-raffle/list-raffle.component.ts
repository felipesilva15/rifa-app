import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Raffle } from 'src/app/main/api/raffle';
import { RaffleService } from 'src/app/main/service/raffle.service';

@Component({
  selector: 'app-list-raffle',
  templateUrl: './list-raffle.component.html',
  styleUrl: './list-raffle.component.scss'
})
export class ListRaffleComponent {
  records: Raffle[] = [];
  selectedRecords: Raffle[] = [];
  cols: any[] = [];
  isLoading: boolean = true;
  deleteConfirmed: boolean = false;

  constructor(private raffleService: RaffleService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.loadData();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nome' },
      { field: 'maximum_numbers', header: 'QtdNumeros' },
      { field: 'ticket_value', header: 'VlBilhete' },
      { field: 'start_date', header: 'DtInicio' },
      { field: 'end_date', header: 'DtFim' },
    ];
  }

  loadData(): void {
    this.raffleService.list().subscribe({
      next: (data: Raffle[]) => {
        this.records = data;

        this.records.forEach((record) => {
          record.start_date = new Date(<Date>record.start_date);
          record.end_date = new Date(<Date>record.end_date);
        });

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
          this.raffleService.delete(record.id).subscribe(
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
        this.raffleService.delete(record.id).subscribe(
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
}
