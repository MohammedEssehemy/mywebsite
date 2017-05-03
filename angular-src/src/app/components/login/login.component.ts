import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from "../../models/user";
import { UsersService } from "app/services/users.service";
import { FlashMessagesService } from "angular2-flash-messages/module";
import { Router } from "@angular/router";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  user: User;
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
      'username': [this.user.username, Validators.required ],
      'password': [this.user.password, Validators.required ]
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
    'password': '',
  };

  validationMessages = {
    'username': {
      'required': 'username is required.'
    },
    'password': {
      'required': 'password is required.'
    }
  };


  onSubmit(e) {
   this.user = this.userForm.value;
    this.busy = true;
    e.preventDefault();
    this.usersService.authenticate(this.user).subscribe((response) => {
      if (response.success) {
        this.usersService.storeToken(response.token);
        this.usersService.storeUser(response.user);
        this.flashMessagesService.show('redirecting to home', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/']) ;
      } else {
        this.busy = false;
        this.flashMessagesService.show(response.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }

    })

  }

}