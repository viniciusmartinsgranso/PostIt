import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPayload } from '../../models/payloads/login.payload';
import { RegisterPayload } from '../../models/payloads/register.payload';
import { AuthService } from '../../services/auth.service';
import { HelperService } from '../../services/helper.service';
import { CustomValidators } from '../../utils/validators';
import isValidPassword = CustomValidators.isValidPassword;
import isValidEmail = CustomValidators.isValidEmail;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly helperService: HelperService,
    private readonly router: Router,
    private readonly authService: AuthService,
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
    const [isSuccess, message] = await this.authService.login(this.loginPayload.email, this.loginPayload.password);
    this.isLoading = false;

    if (isSuccess) {
      return void await this.router.navigate(['/home']);
    }

    await this.helperService.showToast(message, 5_000);
  }

  public async register(): Promise<void> {
    if(!this.canRegister()) return;

    this.isLoading = true;
    const [isSuccess, message] = await this.authService.register(this.registerPayload);
    this.isLoading = false;

    if (isSuccess)
      return void await this.router.navigate(['/home']);

    await this.helperService.showToast(message, 5_000);
  }

  public canLogin(): boolean {
    if (isValidEmail(this.loginPayload.email) && isValidPassword(this.loginPayload.password))
      return true;

    return false;
  }

  public canRegister(): boolean {
    if (this.registerPayload.email !== this.registerPayload.confirmEmail) return;

    if (!isValidEmail(this.registerPayload.email) && (!isValidEmail(this.registerPayload.confirmEmail))) return;

    if (this.registerPayload.password !== this.registerPayload.confirmPassword) return;

    if (!isValidPassword(this.registerPayload.password) && !isValidPassword(this.registerPayload.confirmPassword)) return;

    if (this.registerPayload.name.trim().length<=0) return;

    return true;
  }

}
