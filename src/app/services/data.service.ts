import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(private httpClient: HttpClient) {}

  public getArtworks(url?: string) {
    if (url === undefined) {
      url = environment.apiUrl + 'artworks';
    }
    return this.httpClient.get(url);
  }

  getArtworksByLocation(id) {
    return this.httpClient.get(environment.apiUrl + 'locations/' + id + '/artworks');
  }

  public getArtwork(id) {
    return this.httpClient.get(environment.apiUrl + 'artworks/' + id);
  }

  public getArtists() {
    return this.httpClient.get(environment.apiUrl + 'artists');
  }

  public getLocations() {
    return this.httpClient.get(environment.apiUrl + 'locations');
  }

  public login(params) {
    return this.httpClient.post(environment.apiUrl + 'login', params);
  }

  public register(params) {
    return this.httpClient.post(environment.apiUrl + 'register', params);
  }

  public getAddressByGPS(params) {
    return this.httpClient.get('https://geocode.xyz/' + params + '?geoit=json');
  }

}
