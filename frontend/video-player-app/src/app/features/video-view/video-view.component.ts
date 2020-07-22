import { YoutubeUrl } from './../../shared/interfaces/youtube-url.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {

  // Intercept input property changes with a settter
  private _youtubeVideo: YoutubeUrl;
  @Input() set youtubeVideo(value: YoutubeUrl) {
    if (!value) {
      return;
    }
    this._youtubeVideo = value;
    this.videoId = this.parseYouTubeUrl(value.url);
    const bookmarkInfo = this.parseBookmarkStatus(value.bookmarked);
    this.bookmarksButtonColor = bookmarkInfo['color'];
    this.bookmarksButtonText = bookmarkInfo['text'];
  }
  get youtubeVideo(): YoutubeUrl {
    return this._youtubeVideo;
  }

  @Output() messageEvent = new EventEmitter<YoutubeUrl>();

  videoId = '';
  bookmarksButtonText = '';
  bookmarksButtonColor = '';

  constructor() { }

  ngOnInit(): void {
    this.initializeYouTubePlayer();
    this.initializeDefaultsBookmarksButton();
  }

  emitBookmarkManaging() {
    this.messageEvent.emit(this.youtubeVideo);
  }

  private initializeYouTubePlayer(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  private initializeDefaultsBookmarksButton(): void {
    this.bookmarksButtonText = 'Add to Bookmarks';
    this.bookmarksButtonColor = 'warn'
  }

  private parseYouTubeUrl(url: string): string {
    if (!url) { return; }
    if (url.includes('youtu.be')) {
      return url.split('/')[2]
    } else if (url.includes('youtube.com')) {
      return url.split('=')[1]
    }
    else {
      console.error(`Invalid YouTube URL: ${url}`)
    }
  }

  private parseBookmarkStatus(status: boolean): object {
    if (status) {
      return { text: 'Remove from Bookmarks', color: 'basic' }
    }
    return { text: 'Add to Bookmarks', color: 'warn' }
  }

}
