import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';



 const LOCAL_STORAGE_KEY = 'formularioo'
 

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit{
  cargando = false;
  formData: any = [];
  //vector con infromacion 
  lista:any[] = [];
  aux!: FormGroup;

  
  constructor(private readonly formBuilder: FormBuilder) {     
  }

  ngOnInit(){
    this.aux = this.initForm()
    const saveData = localStorage.getItem(LOCAL_STORAGE_KEY);
    console.log("datos guardados", saveData);
    if(saveData){
      const {fecha, ...formData} = JSON.parse(saveData);
      this.formData = formData;
      this.controls['date']?.setValue(new Date(fecha))
      console.log("datos en localstorage:");
    }
  }

  get controls() {
    return this.aux.controls;
  }

  initForm(): FormGroup {
    return  this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      num: [null],
      date: [null],
      hora: [null]
    })
  }


  guardarCambios():void{
    console.log(this.aux);
    console.log(this.aux.value);
  }
  onSubmit(){
    
    this.cargando=true;
    //recuperamos datos
    const fechActual = Date(); //fecha actual

    //verificamos que la fecha no haya apasado
    if(this.controls['date'].value < fechActual){
      /*alert('La fecha seleccionada ya ha pasado');*/
      Swal.fire(
        'Fecha Imposible',
        'La fecha ya ha pasado',
        'error'
      )
      return;
    }

    //verificamos que la fecha no se repita, si si manda el mensaje de error
    if (this.fechaRepetida(this.controls['date'].value)) {
      /*alert('La fecha seleccionada ya ha sido guardada previamente');*/
      Swal.fire(
        'Fecha imposible',
        'La fecha ya ha sido guardada previamente',
        'error'
      )
      return;
    }else{
      Swal.fire(
        'Fecha registrada',
        'La fecha esta disponible y la cita agendada',
        'success'
      )
    }
    this.cargando = false;

    this.cargando =true;

    //guardamos la informacion en la variable data y despues la agregamos a las lista
    const data = {
      ...this.formData,
      fecha: this.controls['date'].value.toISOString()
    };
    
    console.log("data", data);
    this.lista.push(data);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.lista));
    console.log("datos guaradados");
    this.cargando=false;

  }

  //funcion que verifica que las fechas no se repitan en el arreglo
  //true si la fecha se repite, false si no
  fechaRepetida(date: Date): boolean {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      const savedList = JSON.parse(savedData)
        for (let i = 0; i < savedList.length; i++) {
          const savedDate = new Date(savedList[i].fecha);
            if (date.getTime() === savedDate.getTime()) {
            return true;
          }
        } 
        return false;
  }
  else{
    return false;
  }
}
}