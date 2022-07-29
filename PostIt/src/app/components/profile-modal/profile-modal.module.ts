import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoModule } from '../logo/logo.module';
import { ProfileModalComponent } from './profile-modal.component';



@NgModule({
  declarations: [
    ProfileModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProfileModalComponent,
  ]
})
export class ProfileModalModule { }
