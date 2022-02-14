import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], typeMatch?: string){

    //Filtered list
    var filteredList: Content[] = [];

    //Check songs in list and push to filtered list
    for(var content of contentList){
      if(content?.type == typeMatch){
        filteredList.push(content);
      }
    }

    //Return the new list
    return filteredList;
  }

}
