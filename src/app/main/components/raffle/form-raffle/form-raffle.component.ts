import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Raffle } from 'src/app/main/api/raffle';
import { AuthService } from 'src/app/main/service/auth.service';
import { CustomDynamicDialogService } from 'src/app/main/service/custom-dynamic-dialog.service';
import { RaffleService } from 'src/app/main/service/raffle.service';

@Component({
  selector: 'app-form-raffle',
  templateUrl: './form-raffle.component.html',
  styleUrl: './form-raffle.component.scss'
})
export class FormRaffleComponent {
  data!: Raffle;
  formGroup!: FormGroup;
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  paramId: number;

  constructor(
    private raffleService: RaffleService, 
    private location: Location,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.paramId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');
    
    this.data = {
      name: '',
      maximum_numbers: null,
      ticket_value: null,
      start_date: null,
      end_date: null
    };
    
    this.formGroup = this.buildFormGroup();

    if (this.paramId) {
      this.loadData();
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required, Validators.maxLength(120), Validators.minLength(3)]],
      maximum_numbers: [this.data.maximum_numbers, [Validators.required]],
      ticket_value: [this.data.ticket_value, [Validators.required, Validators.max(999.99), Validators.min(0.01)]],
      start_date: [this.data.start_date, [Validators.required]],
      end_date: [this.data.end_date, []],
    });
  }

  loadData(): void {
    this.isLoading = true;

    this.raffleService.get(this.paramId).subscribe({
      next: (res: Raffle) => {
        this.data = res;

        this.formGroup.patchValue({
          name: this.data.name,
          maximum_numbers: this.data.maximum_numbers,
          ticket_value: this.data.ticket_value,
          start_date: new Date(<Date>this.data.start_date),
          end_date: new Date(<Date>this.data.end_date)
        });

        this.isLoading = false;
      }
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get maximum_numbers() {
    return this.formGroup.get('maximum_numbers');
  }

  get ticket_value() {
    return this.formGroup.get('ticket_value');
  }

  get start_date() {
    return this.formGroup.get('start_date');
  }

  get end_date() {
    return this.formGroup.get('end_date');
  }

  convertFormToObject(): void {
    this.data.name = this.name.value;
    this.data.maximum_numbers = this.maximum_numbers.value;
    this.data.ticket_value = this.ticket_value.value;
    this.data.start_date = this.start_date.value.toISOString().substring(0, 10);
    this.data.end_date = this.end_date.value.toISOString().substring(0, 10);
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
    this.raffleService.create(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  update(): void {
    this.raffleService.update(this.data, this.paramId).subscribe({
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
}
