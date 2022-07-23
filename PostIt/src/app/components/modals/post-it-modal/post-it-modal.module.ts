import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostItModalComponent } from './post-it-modal.component';



@NgModule({
  declarations: [
    PostItModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PostItModalComponent
  ]
})
export class PostItModalModule { }
