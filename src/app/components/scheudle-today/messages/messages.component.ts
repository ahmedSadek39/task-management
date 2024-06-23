import { Component } from '@angular/core';
import { Message } from '@models/global.model';
import { MessageService } from '@services/message.service';
import { PRODUCTION_ASSETS_PATH } from 'src/app/constants/paths';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  messages: Message[] = [];
  assetsPath = PRODUCTION_ASSETS_PATH;

  constructor(private messageService: MessageService){}

  ngOnInit() {
    this.messages = this.messageService.getmessages();
  }

}
