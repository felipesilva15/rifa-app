import { Injectable, Type } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageDialogComponent } from '../components/message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CustomDynamicDialogService {
  ref: DynamicDialogRef | undefined;

  constructor(private dialogService: DialogService) { }

  showError(message: string, title?: string): void  {
    this.ref = this.dialogService.open(MessageDialogComponent, {
      header: title || 'Erro',
      modal: true, 
      width: '25vw',
      breakpoints: {
        '1300px': '50vw',
        '960px': '65vw',
        '640px': '90vw'
      },
      data: { 
        message: message
      }
    });
  }

  showMessage(message: string, title?: string): void  {
    this.ref = this.dialogService.open(MessageDialogComponent, {
      header: title || 'Atenção',
      modal: true, 
      data: { 
        message: message
      }
    });
  }

  openDialog<T>(componentType: Type<any>, title?: string, data?: Object, size?: string): Promise<T> {
    this.ref = this.dialogService.open(componentType, {
      header: title,
      modal: true, 
      data: data,
      width: this.getWidthBySize(size),
      contentStyle: { 
        overflow: 'auto' 
      },
      breakpoints: {
        '520px': '90vw'
      },
    });

    return new Promise<T>((resolve, reject) => {
      this.ref.onClose.subscribe(
        (response: T) => {
          resolve(response);
        },
        (error: any) => {
          reject(error);
        }
      );
    });
  }

  getWidthBySize(size: string) {
    let width: string;

    switch (size) {
      case 'lg':
        width = '1020px';
        break;

      case 'md':
        width = '840px';
        break;
    
      default:
        width = '460px';
        break;
    }

    return width;
  }
}
