import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateUserModalComponent } from './update-user-modal.component';



@NgModule({
  declarations: [
    UpdateUserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UpdateUserModalComponent
  ]
})
export class UpdateUserModalModule { }
