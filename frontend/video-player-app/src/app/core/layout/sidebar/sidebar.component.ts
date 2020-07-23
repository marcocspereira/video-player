import { BookmarksService } from './../../services/bookmarks/bookmarks.service';
import { HistoryService } from './../../services/history/history.service';
import { Subscription } from 'rxjs';
import { SharedDataService } from './../../services/shared-data/shared-data.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  selectedOption = 'history';
  subscriptions = new Subscription();
  sharedUrl: string;

  historyUrls: string[];
  bookmarksUrls: string[];
  historySize: number;
  bookmarksSize: number;

  constructor(private _sharedData: SharedDataService,
    private _historyService: HistoryService,
    private _bookmarksService: BookmarksService) { }

  ngOnInit(): void {
    this._initDefaults();
    this._initSubscriptions();
    this._getData();
  }

  async ngAfterViewInit(): Promise<void> {
    await this._historyService.getHistoryFromApi();
    this._getData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  urlToPlay($event: string) {
    this._sharedData.updateUrl($event);
    console.log($event)
  }

  private _initDefaults(): void {
    this.selectedOption = 'history';
  }

  private _getData(): void {
    this.bookmarksUrls = this._bookmarksService.getBookmarks();
    this.historyUrls = this._historyService.getHistory();
    this.bookmarksSize = this.bookmarksUrls.length;
    this.historySize = this.historyUrls.length;
  }

  private _initSubscriptions(): void {
    this.subscriptions.add(
      this._sharedData.url$.subscribe(url => {
        this.sharedUrl = url;
        this._getData();
      })
    );
  }

}
