import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TablaService } from '../tabla.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {
  @Output() acciones = new EventEmitter<string>();
  lista: any[] = [];  
  constructor( private tablaservice: TablaService){}
  
  ngOnInit(): void {
    this.lista = this.tablaservice.getLista();
  }

  OnClick(){
    localStorage.clear();
    this.ngOnInit();
  }
}
