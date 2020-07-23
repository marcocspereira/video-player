import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  private youTubeUrlPattern = '^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$';

  //in order to share the data after a button click
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchBarFormControl = new FormControl('', [Validators.pattern(this.youTubeUrlPattern)])

  /**
   * After ensure that the input value is valid, it emits the URL to parent component
   */
  sendUrl(): void {
    if (this.searchBarFormControl.invalid) {
      return;
    }
    this.messageEvent.emit(this.searchBarFormControl.value);
  }

}
