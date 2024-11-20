import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Participant } from 'src/app/main/api/participant';
import { ParticipantService } from 'src/app/main/service/participant.service';

@Component({
  selector: 'app-form-participant',
  templateUrl: './form-participant.component.html',
  styleUrl: './form-participant.component.scss'
})
export class FormParticipantComponent {
  data!: Participant;
  formGroup!: FormGroup;
  isLoading: boolean = false;
  isSubmitting: boolean = false;
  paramId: number;

  constructor(
    private participantService: ParticipantService, 
    private location: Location,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.paramId = parseInt(this.activatedRoute.snapshot.paramMap.get('id') ?? '');
    
    this.data = {
      name: '',
      phone_number: '',
      email: ''
    };
    
    this.formGroup = this.buildFormGroup();

    if (this.paramId) {
      this.loadData();
    }
  }

  private buildFormGroup(): FormGroup {
    return this.fb.group({
      name: [this.data.name, [Validators.required, Validators.maxLength(80), Validators.minLength(3)]],
      email: [this.data.email, [Validators.maxLength(254), Validators.email]],
      phone_number: [this.data.phone_number, []]
    });
  }

  loadData(): void {
    this.isLoading = true;

    this.participantService.get(this.paramId).subscribe({
      next: (res: Participant) => {
        this.data = res;

        this.formGroup.patchValue({
          name: this.data.name,
          email: this.data.email,
          phone_number: this.data.phone_number
        });

        this.isLoading = false;
      }
    });
  }

  get name() {
    return this.formGroup.get('name');
  }

  get email() {
    return this.formGroup.get('email');
  }

  get phone_number() {
    return this.formGroup.get('phone_number');
  }

  convertFormToObject(): void {
    this.data.name = this.name.value;
    this.data.email = this.email.value;
    this.data.phone_number = this.phone_number.value;
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
    this.participantService.create(this.data).subscribe({
      next: () => {
        this.backPage();
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  update(): void {
    this.participantService.update(this.data, this.paramId).subscribe({
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
