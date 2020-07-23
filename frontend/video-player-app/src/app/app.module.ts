import { CommonModule } from '@angular/common';
import { BookmarksModule } from './features/bookmarks/bookmarks.module';
import { HistoryModule } from './features/history/history.module';
import { VideoViewModule } from './features/video-view/video-view.module';
import { SearchBarModule } from './features/search-bar/search-bar.module';
import { MaterialModule } from './core/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './features/history/history.component';
import { BookmarksComponent } from './features/bookmarks/bookmarks.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { MainContentComponent } from './core/layout/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SearchBarModule,
    VideoViewModule,
    HistoryModule,
    BookmarksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
