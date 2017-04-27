import { Injectable } from '@angular/core';
import { Message } from "../models/message";
import { User } from "../models/user";

@Injectable()
export class ValidateService {

  constructor() { }
  validateEmail(email) {
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  validatePassword(password){
      let strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (strongPasswordRegex.test(password)) {
        return true;
    } else {
      return false;
    }
  }
  validateContactForm(msg: Message) {
    if (msg.username && this.validateEmail(msg.email) && msg.title && msg.body ) {
      return true;
    } else {
      return false;
    }
  }
   validateLoginForm(user: User) {
    if (user.username && user.password ) {
      return true;
    } else {
      return false;
    }
  }
validateRegisterForm(user: User) {
    if (user.username && this.validatePassword(user.password) && this.validateEmail(user.email)) {
      return true;
    } else {
      return false;
    }
  }
}
