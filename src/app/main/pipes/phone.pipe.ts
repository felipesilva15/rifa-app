import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
  standalone: true
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    const phoneNumber = value.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (phoneNumber.length === 9) {
      return `${phoneNumber.slice(0, 5)}-${phoneNumber.slice(5)}`;
    } else if (phoneNumber.length === 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    } else if (phoneNumber.length === 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    } else {
      return value;
    }
  }

}
