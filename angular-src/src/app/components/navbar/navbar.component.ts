import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { User } from "../../models/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    if (this.usersService.loggedIn()) {
      this.user = this.usersService.getUser();
    }
  }

  logoutFun(){
    this.usersService.logout();
      this.flashMessagesService.show('logged out', { cssClass: 'alert-success', timeout: 2000 });
               setTimeout(()=>{ this.router.navigate(['/'])},2000);
  }
}
