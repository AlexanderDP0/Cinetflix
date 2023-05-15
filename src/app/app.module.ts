import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

//Rutas
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgendarComponent } from './agendar/agendar.component';
import { CitasComponent } from './citas/citas.component';
import { MenuComponent } from './menu/menu.component';
import { MansoryComponent } from './mansory/mansory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Date-picker mat.spinner
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from "@mat-datetimepicker/core";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

//Servicio
import { TablaService } from './tabla.service';
import { VideoPipe } from './video.pipe';


import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TrailerComponent } from './trailer/trailer.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AgendarComponent,
    CitasComponent,
    MenuComponent,
    MansoryComponent,
    VideoPipe,
    TrailerComponent,
    ContenedorComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule, 
    MatFormFieldModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatProgressSpinnerModule,
    [SweetAlert2Module.forRoot()],
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TablaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
