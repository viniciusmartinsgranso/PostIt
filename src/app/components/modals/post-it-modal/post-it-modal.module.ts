import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostItModalComponent } from './post-it-modal.component';



@NgModule({
  declarations: [
    PostItModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    PostItModalComponent
  ]
})
export class PostItModalModule { }
