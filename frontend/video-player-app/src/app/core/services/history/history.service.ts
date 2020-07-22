import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

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

  addToHistory(url: string): void {
    let history = this.getHistory();
    history.push(url);
    window.localStorage.setItem('history', JSON.stringify(history));
  }

  removeFromHistory(url: string): void {
    const oldHistory = this.getHistory();
    const newHistory = oldHistory.filter(element => element != url);
    window.localStorage.setItem('history', JSON.stringify(newHistory));
  }
}
