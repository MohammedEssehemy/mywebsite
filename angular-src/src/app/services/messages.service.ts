import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { Message } from "../models/message";

@Injectable()
export class MessagesService {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1OGZmMTljNTk3YzhhNTM0ZTk1ZTUzYTgiLCJpYXQiOjE0OTMyNDgwMjEsImV4cCI6MTQ5MzI1ODgyMX0.nwG0j9M9VX7CFo86Mtt6cQm2J0mcjKPidbAMBSvZAg4';


  sendMessage(msg: Message){
    let headers = new Headers();
    headers.append('content-type','application/json');
   return  this.http.post('api/msgs',msg,{headers:headers}).map( res => res.json());
  }

  getMessages(){
     let headers = new Headers();
    headers.append('x-access-token',this.token);
    
   return  this.http.get('api/msgs',{headers:headers}).map( res => res.json());
  }

  deleteMessage(id){
     let headers = new Headers();
    headers.append('x-access-token',this.token);
   return  this.http.delete(`api/msgs/${id}`,{headers:headers}).map( res => res.json());
  }
  constructor(private http: Http) { }

}
