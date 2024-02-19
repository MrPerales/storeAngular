import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    console.log(value);

    const dateApi = new Date(value);
    const dateNow = Date.now();
    const difference = dateNow - dateApi.getTime();
    console.log(difference);

    const inHours = Math.round(difference / (1000 * 3600));
    const inDays = Math.round(inHours / 24);
    const inMonth = Math.round(inDays / 30);
    console.log(inHours);
    console.log(inDays);
    console.log(inMonth);

    let date = '';
    if (inHours < 24) {
      date = `${inHours} hrs ago `;
      return date;
    } else if (inDays < 30) {
      return (date = `${inDays} days ago `);
    } else if (inMonth < 12) {
      return (date = `${inMonth} month ago `);
    }
    return date;
  }
}
