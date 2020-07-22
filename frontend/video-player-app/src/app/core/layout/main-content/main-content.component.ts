import { YoutubeUrl } from './../../../shared/interfaces/youtube-url.interface';
import { HistoryService } from './../../services/history/history.service';
import { BookmarksService } from './../../services/bookmarks/bookmarks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(private _bookmarksService: BookmarksService,
    private _historyService: HistoryService) { }

  urlToPlay: YoutubeUrl;

  ngOnInit(): void {

  }

  /**
   * This allow to forward the new url to video player and
   * to add in history
   * @param {string} $event the url received from SearchBar
   */
  receiveMessage($event: string) {
    this.urlToPlay = {
      url: $event,
      bookmarked: this._bookmarksService.isInBookmarks($event)
    };
    this.addUrlToHistory($event);
  }

  private addUrlToHistory(url: string): void {
    if (this._historyService.isInHistory(url)) {
      return;
    }
    this._historyService.addToHistory(url);
  }

  manageBookmarking($event: YoutubeUrl) {
    let bookmarked;
    if ($event.bookmarked) {
      this._bookmarksService.removeFromBookmarks($event.url);
      bookmarked = false;
    }
    else {
      this._bookmarksService.addToBookmarks($event.url);
      bookmarked = true;
    }
    this.urlToPlay = {
      url: $event.url,
      bookmarked: bookmarked
    }

  }

}
