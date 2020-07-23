import { SnackBarService } from './../../services/snack-bar/snack-bar.service';
import { SharedDataService } from './../../services/shared-data/shared-data.service';
import { YoutubeUrl } from './../../../shared/interfaces/youtube-url.interface';
import { HistoryService } from './../../services/history/history.service';
import { BookmarksService } from './../../services/bookmarks/bookmarks.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnDestroy {

  urlToPlay: YoutubeUrl;
  subscriptions = new Subscription();

  constructor(private _bookmarksService: BookmarksService,
    private _historyService: HistoryService,
    private _sharedData: SharedDataService,
    private _snackBar: SnackBarService) { }

  async ngOnInit(): Promise<void> {
    this._initSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
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

  /**
   * Receives an URL, evaluates if is already in history and updates data
   * @param {string} url input by user
   */
  private async addUrlToHistory(url: string): Promise<void> {
    if (this._historyService.isInHistory(url)) {
      return;
    }
    await this._historyService.addToHistory(url);
    this._sharedData.updateUrl(url);
  }

  /**
   * subscribe to shared url and updates the urlToPlay
   * that is sent to VideoView component
   */
  private _initSubscriptions(): void {
    this.subscriptions.add(
      this._sharedData.url$.subscribe(url => {
        if (url) {
          this.urlToPlay = {
            url: url,
            bookmarked: this._bookmarksService.isInBookmarks(url)
          }
        }
      })
    );
  }

  manageBookmarking($event: YoutubeUrl) {
    let bookmarked: boolean;
    if ($event.bookmarked) {
      this._bookmarksService.removeFromBookmarks($event.url);
      bookmarked = false;
      this._snackBar.show('- YouTube URL Video removed from Bookmarks');
    }
    else {
      this._bookmarksService.addToBookmarks($event.url);
      bookmarked = true;
      this._snackBar.show('+ YouTube URL Video added to Bookmarks');
    }
    this.urlToPlay = {
      url: $event.url,
      bookmarked: bookmarked
    }
    this._sharedData.updateUrl(this.urlToPlay.url);

  }

}
