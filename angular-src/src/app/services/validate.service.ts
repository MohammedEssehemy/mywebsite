import { Injectable } from '@angular/core';
import { Message } from "../models/message";

@Injectable()
export class ValidateService {

  constructor() { }
  validateEmail(email) {
    let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!emailRegex.test(email)) {
      return false
    } else {
      return true;
    }
  }
  validateMessageForm(msg: Message) {
    if (!msg.username || !msg.email || !msg.title || !msg.body) {
      return false;
    } else {
      return true;
    }
  }

}
