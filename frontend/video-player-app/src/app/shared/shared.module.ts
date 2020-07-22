import { MaterialModule } from './../core/material/material.module';
import { ListUrlsComponent } from './components/list-urls/list-urls.component';
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ListUrlsComponent
  ],
  exports: [
    ListUrlsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule
  ]
})
export class SharedModule { }