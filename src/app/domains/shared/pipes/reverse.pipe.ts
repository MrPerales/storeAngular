import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    const toArray = value.split('');
    const reverseArray = toArray.reverse();
    const toString = reverseArray.join('');
    return toString;
  }
}
