import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import Swal from 'sweetalert2';


if(!navigator.geolocation){
  Swal.fire(
    'Error',
    'Navegador no soporta el Geolocation',
    'error'
  )
  throw new Error('Navegador no soporta el Geolocation');
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
