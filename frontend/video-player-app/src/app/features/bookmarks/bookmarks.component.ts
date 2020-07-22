import { YoutubeUrl } from './../../shared/interfaces/youtube-url.interface';
import { BookmarksService } from './../../core/services/bookmarks/bookmarks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  videosBookmarks: string[];

  constructor(private _bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this.videosBookmarks = this._bookmarksService.getBookmarks();
  }

}
