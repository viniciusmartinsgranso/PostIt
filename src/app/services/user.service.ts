import { Injectable } from '@angular/core';
import { HttpAsyncService } from '../modules/http-async/services/http-async.service';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  constructor(
    private readonly http: HttpAsyncService,
  ) {}

}
