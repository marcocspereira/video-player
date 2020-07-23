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
    this.videoId = this._parseYouTubeUrl(value.url);
    const bookmarkInfo = this._parseBookmarkStatus(value.bookmarked);
    this.bookmarksButtonColor = bookmarkInfo['color'];
    this.bookmarksButtonText = bookmarkInfo['text'];
  }
  get youtubeVideo(): YoutubeUrl {
    return this._youtubeVideo;
  }

  /**
   * To support the information about the URL to book/unbook
   */
  @Output() messageEvent = new EventEmitter<YoutubeUrl>();

  /**
   * Data to display in the video player
   */
  videoId = '';
  /**
   * Some data to configure the bookmark button
   */
  bookmarksButtonText = '';
  bookmarksButtonColor = '';

  constructor() { }

  ngOnInit(): void {
    this._initializeYouTubePlayer();
    this._initializeDefaultsBookmarksButton();
  }

  emitBookmarkManaging() {
    this.messageEvent.emit(this.youtubeVideo);
  }

  private _initializeYouTubePlayer(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

  private _initializeDefaultsBookmarksButton(): void {
    this.bookmarksButtonText = 'Add to Bookmarks';
    this.bookmarksButtonColor = 'warn'
  }

  /**
   * A phase of validation about the video that users input
   * Only YouTube videos are allowed (2 types)
   * @requires {string} the equivalent tovideoId to play
   */
  private _parseYouTubeUrl(url: string): string {
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

  /**
   * it manages the appearance of bookmark butto, depending of its status
   * @param {boolean} status the current status of bookmark button
   */
  private _parseBookmarkStatus(status: boolean): object {
    if (status) {
      return { text: 'Remove from Bookmarks', color: 'basic' }
    }
    return { text: 'Add to Bookmarks', color: 'warn' }
  }

}
