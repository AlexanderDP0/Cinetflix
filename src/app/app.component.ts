import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mini2' + VERSION.major;

  pelicula: string = '';
  tipo: string = '';
  idioma: string = '';
}
