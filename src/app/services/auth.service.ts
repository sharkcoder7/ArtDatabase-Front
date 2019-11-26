import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  public login(params) {
    return this.httpClient.post(environment.apiUrl + 'login', params);
  }

  public register(params) {
    return this.httpClient.post(environment.apiUrl + 'register', params);
  }

}
