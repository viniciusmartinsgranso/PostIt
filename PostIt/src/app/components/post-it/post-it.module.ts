import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostItComponent } from './post-it.component';

@NgModule({
  declarations: [
    PostItComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    PostItComponent
  ],
})

export class PostItModule {

}

