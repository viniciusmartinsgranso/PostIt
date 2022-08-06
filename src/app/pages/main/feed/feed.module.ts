import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FeedItemModule } from '../../../components/feed-item/feed-item.module';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    FeedItemModule,
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
