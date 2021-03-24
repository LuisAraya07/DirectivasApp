import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  color: string = 'red';
  mensaje: string = 'Mensaje requerido';
  miFormulario : FormGroup =  this._formBuilder.group({
    nombre: ['', Validators.required]
  });
  constructor( private _formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }


  tieneError( campo: string ): boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }
  cambiarNombre(): void {
    this.mensaje = Math.random().toString() ;
  }

  cambiarColor(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }

}
