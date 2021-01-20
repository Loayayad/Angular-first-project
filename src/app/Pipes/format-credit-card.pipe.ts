import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCreditCard'
})
export class FormatCreditCardPipe implements PipeTransform {
  creditString : string = '';

  transform(value: number): string {
    this.creditString = value.toString();
    console.log(this.creditString);
    this.creditString.split('').join('-');
    console.log(this.creditString);
    //this.creditString.match(new RegExp('.{1,4}', 'g'))?.join("-");
    return this.creditString;
  }

}
