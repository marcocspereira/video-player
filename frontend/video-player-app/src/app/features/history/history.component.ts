import { HistoryService } from './../../core/services/history/history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  videosHistory: string[];

  constructor(private _historyService: HistoryService) { }

  ngOnInit(): void {
    this.videosHistory = this._historyService.getHistory();
  }

}
