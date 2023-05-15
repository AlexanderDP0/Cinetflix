import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
   geolocationurl = 'http://ip-api.com/json/';
   ipaddressurl = 'http://api.ipify.org/?format=json';
  constructor(private readonly httpClient: HttpClient) { }
  getIPAddress(): Observable <any>  {
    return this.httpClient.get(this.ipaddressurl);
  }
  getGeolocationByIpAddress(ipaddress: string): Observable <any>  {
    return this.httpClient.get(`${this.geolocationurl}${ipaddress}`);
  }
}
