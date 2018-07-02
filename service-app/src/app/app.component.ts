import { Component } from '@angular/core';

import {DataService} from './account.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
 
})
export class AppComponent {
  
  accounts: {name:string,status:string}[];
  
  constructor(private dataService: DataService)
  {
    this.accounts = dataService.accounts;
  }
  
}
