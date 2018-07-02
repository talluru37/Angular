/**
 * logginservice  file
 * This will act as a common code for all the components
 */

export class LoggingService
{
//  logToConsole(message:string);
  logStatusChange(newStatus:string)
  {
    console.log('A server status changed, new status: ' + newStatus);
  }
  
}