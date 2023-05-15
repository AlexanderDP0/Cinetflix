import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  search!: string;

  constructor(private router:Router){}
  OnClick(){
    if(this.search='Inicio'){
      this.router.navigate(['home']);
    }
    if(this.search='Conocenos'){
      this.router.navigate(['about']);
    }
    if(this.search='Movies'){
      this.router.navigate(['movies']);
    }
    if(this.search='Premier'){
      this.router.navigate(['premier']);
    }
  }
}
