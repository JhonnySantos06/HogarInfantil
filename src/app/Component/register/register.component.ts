import { Component } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private baseDatosService: BaseDatosService) {}


 guardarDatos(formData: NgForm) {
    this.baseDatosService.guardarDatos(formData.value).subscribe(
      response => {
        console.log('Datos guardados:', response);
        // Realizar acciones después de guardar los datos, como redireccionar a otra página o mostrar un mensaje de éxito.
      },
      error => {
        console.error('Error al guardar datos:', error);
        // Manejar errores, mostrar mensajes de error, etc.
      }
    );
  }
}
