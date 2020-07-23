import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _url = new BehaviorSubject(<string>'');

  url$ = this._url.asObservable();

  constructor() { }

  updateUrl(url: string): void {
    this._url.next(url);
  }
}
