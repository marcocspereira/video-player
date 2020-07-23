import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-urls',
  templateUrl: './list-urls.component.html',
  styleUrls: ['./list-urls.component.scss']
})
export class ListUrlsComponent implements OnInit {

  constructor() { }

  /**
   * Items to be listed
   */
  private _list: string[];
  @Input() set list(value: string[]) {
    if (!value) {
      return;
    }
    this._list = value;
  }
  get list(): string[] {
    return this._list;
  }

  /**
   * When user selects an URL, then this components emits to the parent component
   */
  @Output() urlToPlay = new EventEmitter<string>();

  ngOnInit(): void {
  }

  /**
   * Helper method that triggers the event to send the URL to play
   * @param {string} element selected by user
   */
  playThis(element): void {
    this.urlToPlay.emit(element);
  }

}
