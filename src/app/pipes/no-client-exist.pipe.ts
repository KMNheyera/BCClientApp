import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noclientexist'
})
export class NoClientExistPipe implements PipeTransform {
  constructor(
  ){
  }
  transform(value: any): any{
    if(value == null || value == undefined || value == 0){
        return "No client(s) found."
    }
    return value;
  }
}



@NgModule({
  imports: [],
  declarations: [NoClientExistPipe],
  exports: [NoClientExistPipe]
})

export class NoClientExistModule { }
