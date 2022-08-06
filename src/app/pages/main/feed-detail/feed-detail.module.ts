import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CommentModule } from '../../../components/comment/comment.module';

import { FeedDetailPageRoutingModule } from './feed-detail-routing.module';

import { FeedDetailPage } from './feed-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedDetailPageRoutingModule,
    CommentModule,
  ],
  declarations: [FeedDetailPage]
})
export class FeedDetailPageModule {}
