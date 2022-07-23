import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { HelperService } from '../../services/helper.service';
import { CustomValidators } from '../../utils/validators';
import isValidPassword = CustomValidators.isValidPassword;
import isValidEmail = CustomValidators.isValidEmail;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

  public ngOnInit(): void {
    console.log(this.registerPayload.email);
  }

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

    await this.router.navigate(['/home']);
  }

  public async register(): Promise<void> {
    if(!this.canRegister()) return;

    this.isLoading = true;
    console.log(this.registerPayload);

    await this.helperService.showToast('Registrado com sucesso!', 2300);

    await this.helperService.showAlert('Registrado com sucesso', [
      {
        text: 'Cadastrado com sucesso!',
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
    if (isValidEmail(this.loginPayload.email) && isValidPassword(this.loginPayload.password))
      return true;

    return false;
  }

  public canRegister(): boolean {
    if(this.registerPayload.email !== this.registerPayload.confirmEmail) return;

    if (!isValidEmail(this.registerPayload.email) && (!isValidEmail(this.registerPayload.confirmEmail))) return;

    if(this.registerPayload.password !== this.registerPayload.confirmPassword) return;

    if (!isValidPassword(this.registerPayload.password) && !isValidPassword(this.registerPayload.confirmPassword)) return;

    if (this.registerPayload.name.length <= 3) return;

    return true;
  }

  public logoClick($event: boolean): void {
    console.log('Você clicou no logo');
    console.log($event);
  }

}
