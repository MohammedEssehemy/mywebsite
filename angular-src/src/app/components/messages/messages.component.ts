import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/messages.service";
import { Message } from "../../models/message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messagesService:MessagesService) { }
  messagesList:Array<Message> ;
  ngOnInit() {
    this.messagesService.getMessages().subscribe((response)=>{
      if(response.success){
        this.messagesList = response.messages;
      }
      else {
          console.log(response);
      }
    },(err)=>console.log(err));
  }

}
