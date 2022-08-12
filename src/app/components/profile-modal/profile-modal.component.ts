import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileSettingsEnum } from '../../models/enums/profile-settings.enum';
import { HelperService } from '../../services/helper.service';

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
  }

}
