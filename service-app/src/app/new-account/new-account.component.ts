import { DataService } from '../account.service';
import { Component  } from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService,DataService]
})
export class NewAccountComponent {
  
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  constructor(private loggingService: LoggingService, private dataService: DataService)
  {
   
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //const service = new LoggingService();
    
//    this.accountAdded.emit({
//      name: accountName,
//      status: accountStatus
//    });
    
    this.dataService.accounts.push({name:accountName,status:accountStatus});
    
   // console.log('A server status changed, new status: ' + accountStatus);
   // service.logStatusChange(accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
