import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  logoutFun(){
    this.usersService.logout();
      this.flashMessagesService.show('logout ,redirected in 2 seconds', { cssClass: 'alert-success', timeout: 2000 });
               setTimeout(()=>{ this.router.navigate(['/'])},2000);
  }
}
