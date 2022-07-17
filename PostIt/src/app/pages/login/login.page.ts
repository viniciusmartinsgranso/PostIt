import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginPayload } from '../../models/payloads/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly toastController: ToastController,
    private readonly alertController: AlertController,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  };

  public isLoading: boolean = false;

  public async login(): Promise<void> {
    this.isLoading = true;
    console.log(this.loginPayload);

    const toast = await this.toastController.create({
      message: 'Logando',
      duration: 2000,
    });
    await toast.present();

    const alert = await this.alertController.create({
      header: 'Logando',
      buttons: [
        {
          text: 'Ok',
          handler: () => { console.log('Ok!');},
        },
      ],
    });
    await alert.present();
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if (emailIsValid && this.loginPayload.password.length >= 6)
      return true;

    return false;
  }

  public logoClick($event: boolean): void {
    console.log('Você clicou no logo');
    console.log($event);
  }

}
