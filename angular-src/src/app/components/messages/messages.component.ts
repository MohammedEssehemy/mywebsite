import { Component, OnInit } from '@angular/core';
import { MessagesService } from "../../services/messages.service";
import { Message } from "../../models/message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messagesList:Array<Message> ;
  loading: boolean = true;

  constructor(private messagesService:MessagesService) { }


  ngOnInit() {
    this.messagesService.getMessages().subscribe((response)=>{
      if(response.success){
        this.loading = false;
        this.messagesList = response.messages;
      }
      else {
          console.log(response);
      }
    },(err)=>console.log(err));
  }
  messageDeleted(id){
       let messageIndex = this.messagesList.findIndex(m=>m._id == id); 
       this.messagesList.splice(messageIndex,1);   
  }


}
