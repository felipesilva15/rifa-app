import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/main/api/participant';
import { Raffle } from 'src/app/main/api/raffle';
import { TicketsInBatch } from 'src/app/main/api/tickets-in-batch';
import { ParticipantService } from 'src/app/main/service/participant.service';
import { RaffleService } from 'src/app/main/service/raffle.service';
import { TicketService } from 'src/app/main/service/ticket.service';

@Component({
  selector: 'app-batch-form-ticket',
  templateUrl: './batch-form-ticket.component.html',
  styleUrl: './batch-form-ticket.component.scss'
})
export class BatchFormTicketComponent {
  data!: TicketsInBatch;
  formGroup!: FormGroup;
  isLoading: boolean = false;
  isLoadingParticipants: boolean = false;
  isLoadingRaffles: boolean = false;
  isSubmitting: boolean = false;
  participants: Participant[] = [];
  raffles: Raffle[] = [];
  selectedRaffle: Raffle;

  constructor(
    private ticketService: TicketService, 
    private location: Location,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private participantService: ParticipantService,
    private raffleService: RaffleService
  ) {
    this.data = {
      participant_id: null,
      raffle_id: null,
      numbers: [],
      value: null,
      payment_date: new Date()
    };
    
    this.formGroup = this.buildFormGroup();

    this.loadParticipants();
    this.loadRaffles();
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      participant_id: [this.data.participant_id, [Validators.required]],
      raffle_id: [this.data.raffle_id, [Validators.required]],
      numbers: [this.data.numbers, [Validators.required]],
      value: [{value: this.data.value, disabled: true}, []],
      payment_date: [this.data.payment_date, []]
    });
  }

  loadParticipants(): void {
    this.isLoadingParticipants = true;

    this.participantService.list().subscribe({
      next: (res: Participant[]) => {
        this.participants = res;

        this.isLoadingParticipants = false;

        if (this.participants.length > 0 && !this.participant_id.value) {
          this.formGroup.patchValue({
            participant_id: this.participants[0].id
          });
        }
      }
    });
  }

  loadRaffles(): void {
    this.isLoadingRaffles = true;

    this.raffleService.list().subscribe({
      next: (res: Raffle[]) => {
        this.raffles = res;

        this.isLoadingRaffles = false;

        if (this.raffles.length > 0 && !this.raffle_id.value) {
          this.formGroup.patchValue({
            raffle_id: this.raffles[this.raffles.length - 1].id
          });
          this.onChangeRaffle();
        }
      }
    });
  }

  get participant_id() {
    return this.formGroup.get('participant_id');
  }

  get raffle_id() {
    return this.formGroup.get('raffle_id');
  }

  get numbers() {
    return this.formGroup.get('numbers');
  }

  get value() {
    return this.formGroup.get('value');
  }

  get payment_date() {
    return this.formGroup.get('payment_date');
  }

  convertFormToObject(): void {
    this.data.participant_id = this.participant_id.value;
    this.data.raffle_id = this.raffle_id.value;
    this.data.numbers = this.numbers.value;
    this.data.value = this.value.value;
    this.data.payment_date = this.payment_date.value ? this.payment_date.value.toISOString().substring(0, 10) : null;
  }

  submit(): void {
    this.formGroup.markAllAsTouched();

    if (!this.formGroup.valid) {
      this.scrollTop();

      return;
    }

    this.isSubmitting = true;

    this.convertFormToObject();
    this.create();
  }

  scrollTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  create(): void {
    this.ticketService.createInBatch(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  backPage(): void {
    this.location.back();
  }

  onChangeRaffle(): void {
    this.selectedRaffle = this.raffles.find((raffle) => {
      return raffle.id == this.raffle_id.value
    })

    this.value.setValue(this.selectedRaffle.ticket_value);
  }
}
