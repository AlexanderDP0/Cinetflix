import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablaService {
  private lista: any[] = [];

  constructor() { }

  getLista(){
    const saveData = localStorage.getItem('formularioo');
    if(saveData){
      return JSON.parse(saveData);
    }
    return [];
  }
}
