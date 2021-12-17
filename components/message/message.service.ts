import {Injectable} from '@angular/core';

export interface MessageOptions {
  nsDuration?: number,
}

@Injectable({
  providedIn: 'root'
})
export class NSMessageService {

  constructor() {

  }

  success(content: string, options?: MessageOptions) {

  }

  private pushMessage(level: string, content: string, options?: MessageOptions) {

  }

  private renderMessage() {

  }
}
