import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, FilterPipe:string,prop:string ): any {
    if(value.length===0|| FilterPipe===""){
      return value;
    }
    const resultArray=[];
    for(const item of value){
      if(item[prop]===FilterPipe){
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
