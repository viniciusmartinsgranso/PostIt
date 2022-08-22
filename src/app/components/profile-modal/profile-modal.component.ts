import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileSettingsEnum } from '../../models/enums/profile-settings.enum';
import { UserProxy } from '../../models/proxies/user.proxy';
import { HelperService } from '../../services/helper.service';
import { UserService } from '../../services/user.service';
import { UpdateUserModalComponent } from '../modals/update-user-modal/update-user-modal.component';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  constructor(
    public readonly modalController: ModalController,
    private readonly router: Router,
    private readonly helper: HelperService,
  ) { }

  public profileSettingsEnum: typeof ProfileSettingsEnum = ProfileSettingsEnum;

  // public user: UserProxy;

  public ngOnInit(): void {}

  public async clickConfigList(selectedSettings: ProfileSettingsEnum): Promise<void> {
    if (selectedSettings === ProfileSettingsEnum.EXIT) {
      localStorage.clear();
      await this.modalController.dismiss();
      return void await this.router.navigate(['/login']);
    }
    if(selectedSettings === ProfileSettingsEnum.ABOUT_US){
      return void await this.helper.showToast('Projeto Bootcamp LIGA - 2022', 5_000);
    }

    if(selectedSettings === ProfileSettingsEnum.EDIT_PROFILE) {
      await this.openEditProfileModal();
    }
  }

  public async openEditProfileModal(): Promise<void> {
    const modal = await this.modalController.create({
      mode: 'md',
      component: UpdateUserModalComponent,
      cssClass: 'background-profile-modal',
    });
    await modal.present();
  }

}
