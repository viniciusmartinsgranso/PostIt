import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { PostItModalModule } from '../../../components/modals/post-it-modal/post-it-modal.module';
import { PostItModule } from '../../../components/post-it/post-it.module';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PostItModule,
    PostItModalModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
