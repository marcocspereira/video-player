import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarksService {

  constructor() { }

  getBookmarks(): string[] {
    const bookmarks = JSON.parse(window.localStorage.getItem('bookmarks'));
    if (bookmarks == null) {
      return [];
    }
    return bookmarks;
  }

  isInBookmarks(url: string): boolean {
    return this.getBookmarks().includes(url);
  }

  addToBookmarks(url: string): void {
    let bookmarks = this.getBookmarks();
    bookmarks.push(url);
    window.localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  removeFromBookmarks(url: string): void {
    const oldBookmarks = this.getBookmarks();
    const newBookmarks = oldBookmarks.filter(element => element != url);
    window.localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));

  }

}
