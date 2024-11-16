import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogService, DynamicDialogComponent, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-message-dialog',
  standalone: true,
  providers: [
    DialogService, 
    MessageService
  ],
  imports: [
    DialogModule,
    ButtonModule,
    RippleModule
  ],
  templateUrl: './message-dialog.component.html',
  styleUrl: './message-dialog.component.scss'
})
export class MessageDialogComponent {
  message: string;
  instance: DynamicDialogComponent | undefined;

  constructor(private config: DynamicDialogConfig, private ref: DynamicDialogRef) { }

  ngOnInit() {
    this.message = this.config?.data?.message;
  }

  close() {
    this.ref.close();
  }
}
