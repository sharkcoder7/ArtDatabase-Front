import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { AuthService } from 'ngx-auth';

import { TokenStorage } from './token-storage.service';

interface AccessData {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthenticationService implements AuthService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage
  ) {}

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable < boolean > {
    return this.tokenStorage
      .getAccessToken()
      .pipe(map(token => !!token));
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable < string > {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable <AccessData> {
    return this.tokenStorage
      .getRefreshToken()
      .pipe(
        switchMap((refreshToken: string) =>
          this.http.post(`http://5.189.224.213:81/api/v1/refresh`, { refreshToken })
        ),
        tap((tokens: AccessData) => this.saveAccessData(tokens)),
        catchError((err) => {
          this.logout();

          return Observable.throw(err);
        })
      );
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }

  public login() {
    this.http.post('http://5.189.224.213:81/api/v1/login', { });
  }

  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData({ accessToken, refreshToken }: AccessData) {
    this.tokenStorage
      .setAccessToken(accessToken)
      .setRefreshToken(refreshToken);
  }
}
