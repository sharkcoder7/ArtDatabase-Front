import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap, map, switchMap, catchError} from 'rxjs/operators';
import {AuthService} from 'ngx-auth';

import {TokenStorage} from './token-storage.service';
import {DataService} from '../../services/data.service';
import {Router} from '@angular/router';

interface AccessData {
  token: string;
}

@Injectable()
export class AuthenticationService {

  constructor(
    private http: HttpClient,
    private tokenStorage: TokenStorage,
    private dataService: DataService,
    private router: Router
  ) {
  }

  public login(params): Observable<any> {
    return this.dataService.login(params)
      .pipe(tap((token: AccessData) => this.saveAccessData(token)));
  }

  public logout(): void {
    this.tokenStorage.clear();
  }

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable<boolean> {
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
  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  public saveAccessData({token}: AccessData) {
    this.tokenStorage
      .setAccessToken(token);
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
}
