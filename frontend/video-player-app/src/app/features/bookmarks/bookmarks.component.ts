import { YoutubeUrl } from './../../shared/interfaces/youtube-url.interface';
import { BookmarksService } from './../../core/services/bookmarks/bookmarks.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  // Intercept input property changes with a settter
  private _videosBookmarks: string[];
  @Input() set videosBookmarks(value: string[]) {
    this._videosBookmarks = value;
  };
  get videosBookmarks(): string[] {
    return this._videosBookmarks;
  }

  @Output() selectedUrlToPlay = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Helper method that transmits the URL to play
   * @param {string} element selected by user
   */
  bookmarksUrlToPlay($event) {
    this.selectedUrlToPlay.emit($event);
  }
}
