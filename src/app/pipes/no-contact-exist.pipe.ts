import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nocontactexist'
})
export class NoContactExistPipe implements PipeTransform {
  constructor(
  ){
  }
  transform(value: any): any{
    if(value == null || value == undefined || value == 0){
        return "No contact(s) found."
    }
    return value;
  }
}

@NgModule({
  imports: [],
  declarations: [NoContactExistPipe],
  exports: [NoContactExistPipe]
})

export class NoContactExistModule { }