import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {

  transform(value: string, search: string): string {
    const re = new RegExp(search, 'gi');
    return value.replace(re, match => '<b>' + match + '</b>');
}

}
