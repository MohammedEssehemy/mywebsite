import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bookmark } from "app/models/bookmark";
import { BookmarksService } from "../../services/bookmarks.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() bookmark:Bookmark;
  @Output() edited = new EventEmitter<Boolean>();
  editMode:Boolean;
  constructor(private bookmarksService:BookmarksService) { }

  ngOnInit() {
  }
  submitClicked(){
    console.log(this.bookmark);
    this.bookmarksService.editBookmark(this.bookmark).subscribe(res=>{
            this.edited.emit(true);
    });
  }
}
