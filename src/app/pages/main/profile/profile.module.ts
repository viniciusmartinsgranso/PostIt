import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FeedItemModule } from '../../../components/feed-item/feed-item.module';
import { LogoModule } from '../../../components/logo/logo.module';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    FeedItemModule,
  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
