import { Component } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrl: './usuario-nuevo.component.css'
})
export class UsuarioNuevoComponent {

  constructor(private baseDatosService: BaseDatosService) {}

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const { correo, contrasena } = form.value;

      // Llamar al servicio para agregar el usuario a la base de datos
      this.baseDatosService.registrarUsuario(correo, contrasena).subscribe(
        response => {
          console.log('Usuario registrado exitosamente', response);
          // Puedes redirigir o realizar otras acciones aquí
        },
        error => {
          console.error('Error al registrar usuario', error);
          // Manejar el error según tus necesidades
        }
      );
    }
  }
}