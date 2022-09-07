import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiRoutes } from '../../environments/api-routes';
import { AsyncResult } from '../models/interfaces/async-result';
import { UpdateUserPayload } from '../models/payloads/update-user.payload';
import { PostItProxy } from '../models/proxies/post-it.proxy';
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

  public async updateUser(id: number, payload: UpdateUserPayload): Promise<AsyncResult<UserProxy>> {
    const url = apiRoutes.users.update.replace('{id}', String(id));

    const [success, error] = await this.http.put<UserProxy>(url, payload);

    if (error) return [null, error.error.message];

    return [success];
  }

}
