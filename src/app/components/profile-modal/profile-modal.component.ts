import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {

  constructor(
    public readonly modalController: ModalController,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {}

  public async redirectToHome(): Promise<void> {
    await this.modalController.dismiss();
    await this.router.navigateByUrl('login');
  }

}
