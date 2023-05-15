import { Component, OnInit } from '@angular/core';
import { MapsService } from '../maps.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opinion: string='Anónimas';
  video='BhvLIzVL8_o';
  constructor(private readonly mapsService: MapsService){}
  async ngOnInit() {
    const {ip} = await firstValueFrom(this.mapsService.getIPAddress()) 
      console.log(ip)
    const geolocation = await firstValueFrom(this.mapsService.getGeolocationByIpAddress(ip)) 
  }
}
