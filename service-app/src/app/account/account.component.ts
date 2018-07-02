import { DataService } from '../account.service';
import { Component, EventEmitter, Input } from '@angular/core';
import {LoggingService} from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
    providers: [LoggingService]
})
export class AccountComponent {
  
  @Input() account: {name: string, status: string};
  @Input() id: number;
//  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
//  const service = new LoggingService();
  
  
  constructor(private loggingService: LoggingService,private dataService:DataService)
  {
   
  }
  

  onSetTo(status: string) {
   // const service = new LoggingService();
    
 //   this.statusChanged.emit({id: this.id, newStatus: status});
   // console.log('A server status changed, new status: ' + status);
   // service.logStatusChange(status);
    
    this.loggingService.logStatusChange(status);
    this.dataService.updateStatus(this.id,status);
    
  }
}
