import { SnackBarService } from './../snack-bar/snack-bar.service';
import { YoutubeUrl } from './../../../shared/interfaces/youtube-url.interface';
import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyEndpoint = 'history';
  constructor(private _apiService: ApiService,
    private _snackBar: SnackBarService) { }

  getHistory(): string[] {
    const history = JSON.parse(window.localStorage.getItem('history'));
    if (history == null) {
      return [];
    }
    return history;
  }

  isInHistory(url: string): boolean {
    return this.getHistory().includes(url);
  }

  async addToHistory(url: string): Promise<void> {
    await this.addToHistoryInApi(url);
    let history = this.getHistory();
    history.push(url);
    window.localStorage.setItem('history', JSON.stringify(history));
  }

  removeFromHistory(url: string): void {
    const oldHistory = this.getHistory();
    const newHistory = oldHistory.filter(element => element != url);
    window.localStorage.setItem('history', JSON.stringify(newHistory));
  }

  clearLocalHistory(): void {
    window.localStorage.removeItem('history');
  }

  async getHistoryFromApi() {
    const response = await this._apiService.get(this.historyEndpoint);
    if (!!response && response.length > 0) {
      this.clearLocalHistory();
      let urls = response.map(element => element.url);
      window.localStorage.setItem('history', JSON.stringify(urls));
      this._snackBar.show('+ YouTube video URLs loaded from API');
    }
  }

  async addToHistoryInApi(url: string) {
    const data = { url: url };
    const response = await this._apiService.post(this.historyEndpoint, data);
    if (!!response) {
      this._snackBar.show('+ YouTube video URL sent to API');
    }
  }
}
