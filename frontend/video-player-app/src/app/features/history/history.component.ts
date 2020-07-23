import { HistoryService } from './../../core/services/history/history.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  // Intercept input property changes with a settter
  private _videosHistory: string[];
  @Input() set videosHistory(value: string[]) {
    this._videosHistory = value;
  };
  get videosHistory(): string[] {
    return this._videosHistory;
  }

  @Output() selectedUrlToPlay = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Helper method that transmits the URL to play
   * @param {string} element selected by user
   */
  historyUrlToPlay($event) {
    this.selectedUrlToPlay.emit($event);
  }

}
