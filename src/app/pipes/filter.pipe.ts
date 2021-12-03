import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../item';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Item[], searchText: string) {
    searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });


}


}
