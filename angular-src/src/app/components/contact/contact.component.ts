import { Component, OnInit } from '@angular/core';
import { Message } from "../../models/message";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from "../../services/validate.service";
import { MessagesService } from "../../services/messages.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg: Message = new Message();
  constructor(
    private flashMessagesService: FlashMessagesService,
     public validateService: ValidateService,
     private messagesService: MessagesService,
     private router: Router
     ) { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.validateService.validateContactForm(this.msg)) {
          this.messagesService.sendMessage(this.msg).subscribe((response)=>{
              if (response.success){ 
                this.flashMessagesService.show('sent Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
               setTimeout(()=>{ this.router.navigate(['/'])},3000);
              } else {
                  this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
              }
          });
    }
    else {
      this.flashMessagesService.show('All fields are required', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

}
