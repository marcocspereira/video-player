import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = environment.apiPath;
  constructor(private _http: HttpClient) { }

  /**
   * get and post rerurn an Observable, and i'm using a .toPromise()
   * because there's no advantage to observe a request that happens once
   */

  async get(url: string): Promise<any> {
    try {
      return this._http.get(this._urlMaker(url)).toPromise();
    }
    catch (err) {
      console.warn(`[API Service] An error occured: ${err.error}`);
    }
  }

  async post(url: string, data: any): Promise<any> {
    try {
      return this._http.post(this._urlMaker(url), data).toPromise();
    }
    catch (err) {
      console.warn(`[API Service] An error occured: ${err.error}`);
    }
  }

  private _urlMaker(url) {
    return `${this.api}/${url}/`
  }
}
