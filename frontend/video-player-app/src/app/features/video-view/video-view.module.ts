import { CommonModule } from '@angular/common';
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
    CommonModule,
    YouTubePlayerModule,
    MaterialModule
  ]
})
export class VideoViewModule { }