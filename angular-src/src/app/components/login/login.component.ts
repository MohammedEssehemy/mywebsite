import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from "../../services/validate.service";
import { UsersService } from "../../services/users.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  constructor(
     private flashMessagesService: FlashMessagesService,
     private validateService: ValidateService,
     private usersService: UsersService,
     private router: Router
  ) { }


  ngOnInit() {
    this.user = new User() ;
  }


 onSubmit(e) {
    e.preventDefault();
    if (this.validateService.validateLoginForm(this.user)) {
          this.usersService.authenticate(this.user).subscribe((response)=>{
              if (response.success){ 
                this.usersService.storeToken(response.token);
                this.usersService.storeUser(response.user);
                this.flashMessagesService.show('login Successfuly,redirected in 3 seconds', { cssClass: 'alert-success', timeout: 3000 });
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
