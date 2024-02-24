import { Component } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  correo: string = '';
  contrasena: string = '';

  constructor(private baseDatosService: BaseDatosService) {}

  login(form: NgForm) {
    if (form.valid) {
      this.baseDatosService.login(this.correo, this.contrasena).subscribe(
        (response: any) => {
          console.log('Autenticación exitosa:', response.message);
          // Puedes redirigir a otra página o realizar acciones adicionales aquí
        },
        (error) => {
          console.error('Error de autenticación:', error.error);
          // Maneja el error (por ejemplo, muestra un mensaje al usuario)
        }
      );
    } else {
      console.error('Formulario no válido. Verifica los campos.');
    }
  }
}
