import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = environment.apiPath;
  constructor(private _http: HttpClient) { }

  get(url: string): Promise<any> {
    return this._http.get(this._urlMaker(url)).toPromise()
      .catch((err: HttpErrorResponse) => {
        console.warn(`[API Service] An error occured: ${err.error}`)
      });
  }

  post(url: string, data: any): Promise<any> {
    return this._http.post(this._urlMaker(url), data).toPromise()
      .catch((err: HttpErrorResponse) => {
        console.warn(`[API Service] An error occured: ${err.error}`)
      });
  }

  private _urlMaker(url) {
    return `${this.api}/${url}/`
  }
}
