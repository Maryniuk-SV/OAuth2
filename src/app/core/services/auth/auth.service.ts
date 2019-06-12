import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private host = environment.host;

  constructor(private http: HttpClient) {}

  public login() {}

  public logout() {}

  public loginWith(api: string) {
    return this.http.get(`${this.host}/api/auth/${api}`);
  }
}
