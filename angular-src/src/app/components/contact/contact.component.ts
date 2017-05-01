import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Message } from "../../models/message";
import { MessagesService } from "../../services/messages.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from "@angular/router";
import { validateEmail, validatePassword } from "../../shared/custom.validators";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  msg: Message ;
  messageForm: FormGroup;
  busy: boolean = false;
  constructor(
      private fb: FormBuilder,
    private flashMessagesService: FlashMessagesService,
     private messagesService: MessagesService,
    private router: Router
     ) { }

  ngOnInit() {
    this.msg = new Message();
        this.buildForm();
  }


buildForm(): void {
    this.messageForm = this.fb.group({
      'username': [this.msg.username, Validators.required ],
      'email': [this.msg.email,[
        Validators.required,
        validateEmail]
    ],
    'title':['',Validators.required],
    'body':['',[
    Validators.required,
    Validators.minLength(20),
    Validators.maxLength(240)
    ]
    ]    
    });

    this.messageForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }


  onValueChanged(data?: any) {
    if (!this.messageForm) { return; }
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = this.messageForm.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' , ';
        }
        this.formErrors[field] = this.formErrors[field].slice(0, -2);
      }
    }
  }

  formErrors = {
    'username': '',
    'password': '',
  };

  validationMessages = {
    'username': {
      'required': 'name is required.'
    },
    'email': {
      'required': 'email is required.',
      'validateEmail': 'please enter valid email'
    },
    'title' : {
      'required' : 'title is required'
    },
    'body' :{
      'required' : 'message body is required',
      'minlength': 'message body must be at least 20 characters long.',
      'maxlength': 'message body cannot be more than 240 characters long.',
    }
  };

  
  onSubmit(e) {
   this.msg = this.messageForm.value;
    this.busy = true;
    e.preventDefault();
    this.messagesService.sendMessage(this.msg).subscribe((response)=>{
              if (response.success){ 
                this.flashMessagesService.show('sent Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
               setTimeout(()=>{ this.router.navigate(['/'])},3000);
              } else {
                  this.busy = false;
                  this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
              }
          });

  }





  // onSubmit(e) {
  //   e.preventDefault();
  //         this.messagesService.sendMessage(this.msg).subscribe((response)=>{
  //             if (response.success){ 
  //               this.flashMessagesService.show('sent Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
  //              setTimeout(()=>{ this.router.navigate(['/'])},3000);
  //             } else {
  //                 this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
  //             }
  //         });
  // }
}
