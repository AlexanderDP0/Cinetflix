import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  pelicula!: string;

  constructor(private router:Router){}
  OnClick(){
    this.router.navigate(['agendar']);
  }
}
