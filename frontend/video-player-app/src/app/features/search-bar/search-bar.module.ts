import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core'
import { SearchBarComponent } from './search-bar.component';


@NgModule({
  declarations: [
    SearchBarComponent
  ],
  exports: [
    SearchBarComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SearchBarModule { }