import { HistoryService } from './core/services/history/history.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(private _historyService: HistoryService) { }

  ngOnInit() {
    this._historyService.getHistoryFromApi();
  }

  close() {
    this.sidenav.close();
  }
}
