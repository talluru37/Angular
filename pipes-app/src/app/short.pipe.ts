/**
 * New typescript file
 */
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
name:'shorten'
  
})
export class ShortPipe implements PipeTransform
{
  transform(value: any,limit:number) {
   return value.substr(0,limit);
    
    //throw new Error('Method not implemented.');
  }

  }