import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { MessagesService } from "../../services/messages.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message;

  
  constructor(
    private messagesService: MessagesService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }
  deleteClicked(e){
    e.preventDefault();
    if (confirm('Are you Sure?')){
      this.messagesService.deleteMessage(this.message._id).subscribe((data)=>{
            if(data.success){
              this.flashMessagesService.show('deleted Successfully',{ cssClass: 'alert-success', timeout: 3000 });
            } else {
              this.flashMessagesService.show(`Error: ${data.msg}`,{ cssClass: 'alert-danger', timeout: 3000 });
            }
      });
    }
  }

}
