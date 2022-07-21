import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helperService: HelperService,
    private readonly router: Router,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  };

  public registerPayload: RegisterPayload = {
    name: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
  };

  public isLoading: boolean = false;

  public isSignAccount: boolean = false;

  public async login(): Promise<void> {
    if (!this.canLogin()) return;

    this.isLoading = true;
    console.log(this.loginPayload);

    await this.helperService.showToast('Logado com sucesso!', 2300);

    await this.helperService.showAlert('Logado com sucesso', [
      {
        text: 'Esqueci minha senha',
        handler: () => console.log('Esqueci'),
      },
      {
        text: 'Tentar novamente',
        handler: () => console.log('Tentar'),
      },
    ]);

    await this.router.navigateByUrl('/home');
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
