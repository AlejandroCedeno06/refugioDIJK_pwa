import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent implements OnInit {
  nombre: string='';
  correo: string='';
  telefono: number=0;
  dia: number=0;
  hora: number=0;

  datosRecuperados: any;

  constructor() {
    this.datosRecuperados={};
  }

  onSubmit(){
    const datos={
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      dia: this.dia,
      hora: this.hora
    };
    localStorage.setItem('datosForm', JSON.stringify(datos));
    console.log('Datos guardados');
    //limpiar datos del formulario
    this.nombre='';
    this.correo='';
    this.telefono=0;
    this.dia=0; 
    this.hora=0;
  }

  ngOnInit(){
    const datos2=localStorage.getItem('datosForm');
    if (datos2) {
      this.datosRecuperados=JSON.parse(datos2);
    } 
  }

  mostrarDatos: boolean=false;

  mostrarDatosClick() {
    this.mostrarDatos = true;
    console.log('Cita guardada');
  }
}