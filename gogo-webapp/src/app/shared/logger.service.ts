import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Logger {

  constructor(
    private errorHandler: ErrorHandler
  ) { }

  log(value: any, ...rest: any[]) {
    if (!environment.production) {
      console.log(value, ...rest)
    }
  }

  warn(value: any, ...rest: any[]) {
    console.warn(value, ...rest)
  }

  error(error: Error) {
    this.errorHandler.handleError(error)
  }
}
