import { Injectable } from '@angular/core';
import { MESSAGES } from '@constants/messages';
import { Message } from '@models/global.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getmessages() : Message[]{
    return MESSAGES;
  }
}
