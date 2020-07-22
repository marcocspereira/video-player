import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-urls',
  templateUrl: './list-urls.component.html',
  styleUrls: ['./list-urls.component.scss']
})
export class ListUrlsComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
