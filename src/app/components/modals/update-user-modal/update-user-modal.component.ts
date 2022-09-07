import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpdateUserPayload } from '../../../models/payloads/update-user.payload';
import { UserProxy } from '../../../models/proxies/user.proxy';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-update-user-modal',
  templateUrl: './update-user-modal.component.html',
  styleUrls: ['./update-user-modal.component.scss'],
})
export class UpdateUserModalComponent {

  constructor(
    private readonly userService: UserService,
    private readonly modalController: ModalController,
  ) { }

  public user: UserProxy;

  public userPayload: UpdateUserPayload = {
    name: '',
    email: null,
    imageUrl: null,
    role: '',
  };

  public async onUpdateUser(): Promise<void> {
    console.log(this.userPayload);
    await this.userService.updateUser(this.user.id, this.userPayload);
    await this.modalController.dismiss();
  }

}
