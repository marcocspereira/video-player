export interface YoutubeUrl {
  /**
   * YouTube video URL
   */
  url: string;
  /**
   * It says if the video wasn't watched yet
   */
  //isNew: boolean;
  /**
   * It says if the video belong to user's bookmarks
   */
  bookmarked: boolean;
}