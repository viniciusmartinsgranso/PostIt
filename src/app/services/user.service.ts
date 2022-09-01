import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProxy } from '../models/proxies/user.proxy';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(
    private readonly http: HttpAsyncService,
  ) {}

  private readonly userSubject: BehaviorSubject<UserProxy | null> = new BehaviorSubject<UserProxy | null>(null);

  //#endregion

  //#region Methods

  public getUser(): UserProxy | null {
    return this.userSubject.getValue();
  }

  public getUser$(): Observable<UserProxy> {
    return this.userSubject.asObservable();
  }

  public setUser(user: UserProxy): void {
    this.userSubject.next(user);
  }

  public clearUser(): void {
    this.userSubject.next(null);
  }

}
