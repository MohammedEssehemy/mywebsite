import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { Message } from "../models/message";

@Injectable()
export class MessagesService {

  sendMessage(msg: Message){
    let headers = new Headers();
    headers.append('content-type','application/json');
   return  this.http.post('http://localhost:9242/api/msgs',msg,{headers:headers}).map( res => res.json());
  }
  constructor(private http: Http) { }

}
