import { BookmarksComponent } from './bookmarks.component';
import { SharedModule } from './../../shared/shared.module';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core'


@NgModule({
  declarations: [
    BookmarksComponent
  ],
  exports: [
    BookmarksComponent
  ],
  imports: [
    MaterialModule,
    SharedModule
  ]
})
export class BookmarksModule { }