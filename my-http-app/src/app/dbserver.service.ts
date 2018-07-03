/**
 * New typescript file
 * Injectable - we need to use when we need to inject one service to another service
 */

import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DBServervice 
 {
   constructor(private http:Http)
  {
     
   }
  
  storeDataToFirebase(servers:any)
  {
    return this.http.post('https://nk-angular-service.firebaseio.com/data.json',servers).
      map((response: Response) => 
    {
      const data = response.json();
      console.log(data);
        return data;
    } 
    );
  }
 }