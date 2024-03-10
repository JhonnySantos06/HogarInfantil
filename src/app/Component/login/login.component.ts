import { Component } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  
  correo?: string ;
  contrasena?: string;

  constructor(private baseDatosService: BaseDatosService, private router: Router) {}

  login(form: NgForm) {
    if (form.valid) {
      const { correo, contrasena } = form.value;

    this.baseDatosService.login(correo, contrasena).subscribe({
      next: (response: any) => {
        console.log('Autenticación exitosa:', response.message);
    
        // redirigir a otra página
        this.router.navigate(['/menu']);
      },
      error: (error) => {
        console.error('Error de autenticación:', error.error);
        // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
      }
    });
    } else {
      console.error('Formulario no válido. Verifica los campos.');
    }
  }
}
