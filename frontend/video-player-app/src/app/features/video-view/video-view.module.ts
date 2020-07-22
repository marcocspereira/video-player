import { MaterialModule } from './../../core/material/material.module';
import { VideoViewComponent } from './video-view.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { NgModule } from '@angular/core'


@NgModule({
  declarations: [
    VideoViewComponent
  ],
  exports: [
    VideoViewComponent
  ],
  imports: [
    YouTubePlayerModule,
    MaterialModule
  ]
})
export class VideoViewModule { }