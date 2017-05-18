import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { Bookmark } from "../models/bookmark";
import { UsersService } from "./users.service";

@Injectable()
export class BookmarksService {
  token;
  addBookmark(bookmark: Bookmark) {
    this.token = this.usersService.getToken();    
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('x-access-token', this.token);
    return this.http.post('/api/bookmarks', bookmark, { headers: headers }).map(res => res.json());
  }

  getBookmarks() {
    this.token = this.usersService.getToken();
    let headers = new Headers();
    headers.append('x-access-token', this.token);
    return this.http.get('/api/bookmarks', { headers: headers }).map(res => res.json());
  }

  deleteBookmark(id) {
    let headers = new Headers();
    this.token = this.usersService.getToken();    
    headers.append('x-access-token', this.token);
    return this.http.delete(`/api/bookmarks/${id}`, { headers: headers }).map(res => res.json());
  }
  editBookmark(bookmark:Bookmark) {
    let headers = new Headers();
    this.token = this.usersService.getToken();        
    headers.append('x-access-token', this.token);    
    console.log(bookmark)
    return this.http.put(`/api/bookmarks/${bookmark._id}`, bookmark,{ headers: headers }).map(res => res.json());
  }

  
  constructor(
    private http: Http,
    private usersService: UsersService
  ) {
  }

}
