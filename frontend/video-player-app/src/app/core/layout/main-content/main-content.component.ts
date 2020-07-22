import { YoutubeUrl } from './../../../shared/interfaces/youtube-url.interface';
import { BookmarksService } from './../../services/bookmarks/bookmarks.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private bookmarksService: BookmarksService) { }

  urlToPlay: YoutubeUrl;

  ngOnInit(): void {

  }

  receiveMessage($event) {
    this.urlToPlay = {
      url: $event,
      bookmarked: this.bookmarksService.isInBookmarks($event)
    };
  }

  manageBookmarking($event: YoutubeUrl) {
    let bookmarked;
    if ($event.bookmarked) {
      this.bookmarksService.removeFromBookmarks($event.url);
      bookmarked = false;
    }
    else {
      this.bookmarksService.addToBookmarks($event.url);
      bookmarked = true;
    }
    this.urlToPlay = {
      url: $event.url,
      bookmarked: bookmarked
    }

  }

}
