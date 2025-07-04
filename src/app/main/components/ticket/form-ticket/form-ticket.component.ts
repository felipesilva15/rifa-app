import { RaffleService } from 'src/app/main/service/raffle.service';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/main/api/participant';
import { Raffle } from 'src/app/main/api/raffle';
import { Ticket } from 'src/app/main/api/ticket';
import { ParticipantService } from 'src/app/main/service/participant.service';
import { TicketService } from 'src/app/main/service/ticket.service';
import { TicketResource } from 'src/app/main/api/ticketResource';

@Component({
  selector: 'app-form-ticket',
  templateUrl: './form-ticket.component.html',
  styleUrl: './form-ticket.component.scss'
})
export class FormTicketComponent {
  data!: Ticket;
  formGroup!: FormGroup;
  isLoading: boolean = false;
  isLoadingParticipants: boolean = false;
  isLoadingRaffles: boolean = false;
  isSubmitting: boolean = false;
  paramId: number;
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
    this.paramId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');
    
    this.data = {
      participant_id: null,
      raffle_id: null,
      number: null,
      value: null,
      payment_date: new Date()
    };
    
    this.formGroup = this.buildFormGroup();

    this.loadParticipants();
    this.loadRaffles();

    if (this.paramId) {
      this.loadData();
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      participant_id: [this.data.participant_id, [Validators.required]],
      raffle_id: [this.data.raffle_id, [Validators.required]],
      number: [this.data.number, [Validators.required, Validators.min(0)]],
      value: [{value: this.data.value, disabled: true}, []],
      payment_date: [this.data.payment_date, []]
    });
  }

  loadData(): void {
    this.isLoading = true;

    this.ticketService.get(this.paramId).subscribe({
      next: (res: TicketResource) => {
        this.data = res;

        this.formGroup.patchValue({
          participant_id: this.data.participant_id,
          raffle_id: this.data.raffle_id,
          number: this.data.number,
          value: this.data.value,
          payment_date: this.data.payment_date ? new Date(<Date>this.data.payment_date) : new Date()
        });

        this.isLoading = false;
      }
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
            raffle_id: this.raffles[0].id
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

  get number() {
    return this.formGroup.get('number');
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
    this.data.number = this.number.value;
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
    
    if (this.paramId) {
      this.update();
    } else {
      this.create();
    }
  }

  scrollTop(): void {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  create(): void {
    this.ticketService.create(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  update(): void {
    this.ticketService.update(this.data, this.paramId).subscribe({
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
    });

    if (!this.paramId) {
      this.value.setValue(this.selectedRaffle.ticket_value);
    }
  }
}
