import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  selectedOption = 'history';
  constructor() { }

  ngOnInit(): void {
    this.initDefaults();
  }

  private initDefaults(): void {
    this.selectedOption = 'history';
  }

}
