import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from "../../models/user";
import { UsersService } from "app/services/users.service";
import { FlashMessagesService } from "angular2-flash-messages/module";
import { Router } from "@angular/router";
import { validateEmail, validatePassword } from "../../shared/custom.validators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  user: User ;
  busy: boolean = false;
  constructor(
     private fb: FormBuilder,
     private flashMessagesService: FlashMessagesService,
     private usersService: UsersService,
     private router: Router
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.buildForm();
  }


  buildForm(): void {
    this.userForm = this.fb.group({
      'username': [this.user.username, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(24)
      ]
      ],
      'password': [this.user.password, [
        Validators.required,
        validatePassword
      ]
      ],
      'confirm': ['', [
        Validators.required,
         () => {
           if(!this.userForm){return}
           let password = this.userForm.controls['password'].value;
           let confirm = this.userForm.controls['confirm'].value
          if (!confirm || password === confirm) {
            return null
          } else {
            return {
              matchPassword: {
                password,
                confirm
              }
            }
          }
        }
        ]
      ],
      'email': [this.user.email, [
        Validators.required,
        validateEmail
      ]
      ]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  
  onValueChanged(data?: any) {
    if (!this.userForm) { return; }
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = this.userForm.get(field);

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
    'email': '',
    'password': '',
    'confirm': ''
  };

  validationMessages = {
    'username': {
      'required': 'username is required.',
      'minlength': 'username must be at least 4 characters long.',
      'maxlength': 'username cannot be more than 24 characters long.'
    },
    'email': {
      'required': 'email is required.',
      'validateEmail': 'please enter valid email'
    },
    'password': {
      'required': 'password is required.',
      'validatePassword': 'password must be strong (P@ssw0rd)'
    },
    'confirm': {
      'required': 'retype your password',
      'matchPassword':'password mismatch'
    }
  };

  onSubmit(e) {
       // take only the password and leave the confirm
    delete this.userForm.value.confirm;
    this.user = this.userForm.value;
   this.busy = true;
    e.preventDefault();
    /// send to service
          this.usersService.register(this.user).subscribe((response)=>{
              if (response.success){ 
                this.usersService.storeToken(response.token);
                this.usersService.storeUser(response.user);
                this.flashMessagesService.show('registered Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
               setTimeout(()=>{ this.router.navigate(['/'])},3000);
              } else {
                   this.busy = false;
                  this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
              }
          });
 }
}
