import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DataService {

  private REST_API_SERVER = 'https://onelinky.ga/api/v1/';

  constructor(private httpClient: HttpClient) {
  }

  public getArtworks(url?: string) {
    if (url === undefined) {
      url = this.REST_API_SERVER + 'artworks';
    }
    return this.httpClient.get(url);
  }

  getArtworksByLocation(id) {
    return this.httpClient.get(this.REST_API_SERVER + 'locations/' + id + '/artworks');
  }

  public getArtwork(id) {
    return this.httpClient.get(this.REST_API_SERVER + 'artworks/' + id);
  }

  public getArtists() {
    return this.httpClient.get(this.REST_API_SERVER + 'artists');
  }

  public getArtist(id) {
    return this.httpClient.get(this.REST_API_SERVER + 'artists/' + id);
  }

  public getLocations() {
    return this.httpClient.get(this.REST_API_SERVER + 'locations');
  }

  public login(params) {
    return this.httpClient.post(this.REST_API_SERVER + 'login', params);
  }

  public register(params) {
    return this.httpClient.post(this.REST_API_SERVER + 'register', params);
  }

  public forgetPassword(params) {
    return this.httpClient.post(this.REST_API_SERVER + 'password/forget', params);
  }

  public resetPassword(params) {
    return this.httpClient.post(this.REST_API_SERVER + 'password/reset', params);
  }

  public getAddressByGPS(params) {
    return this.httpClient.get('https://geocode.xyz/' + params + '?geoit=json');
  }
}
