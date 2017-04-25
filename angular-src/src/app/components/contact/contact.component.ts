import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Message } from "../../models/message";
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
  formValid: boolean;
  constructor(
    private flashMessagesService: FlashMessagesService,
     private validateService: ValidateService,
     private messagesService: MessagesService,
     private router: Router
     ) { }

  ngOnInit() {
  }

  onblurEmail() {
    if (! this.validateService.validateEmail(this.msg.email)) {
        this.flashMessagesService.show('incorrect email format', { cssClass: 'alert-danger', timeout: 3000 });
      }
  }
onblurForm(){
 this.formValid = this.validateService.validateMessageForm(this.msg) &&this.validateService.validateEmail(this.msg.email);
}
  onSubmit(e) {
    e.preventDefault();
    if (this.validateService.validateMessageForm(this.msg)) {
      if (this.validateService.validateEmail(this.msg.email)) {
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
        this.flashMessagesService.show('incorrect email format', { cssClass: 'alert-danger', timeout: 3000 });
      }
    }
    else {
      this.flashMessagesService.show('All fields are required', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

}
