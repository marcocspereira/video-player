import { SharedModule } from './../../shared/shared.module';
import { HistoryComponent } from './history.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core'


@NgModule({
  declarations: [
    HistoryComponent
  ],
  exports: [
    HistoryComponent
  ],
  imports: [
    MaterialModule,
    SharedModule
  ]
})
export class HistoryModule { }