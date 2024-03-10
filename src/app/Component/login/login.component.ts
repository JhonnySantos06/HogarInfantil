import { Component } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  correo: string = '';
  contrasena: string = '';
 

  constructor(private baseDatosService: BaseDatosService, private router: Router, private authService: AuthService) {
 
  }

  login(form: NgForm): void {
    if (form.valid) {
      this.authService.login(this.correo, this.contrasena).then((isAuthenticated) => {
        if (isAuthenticated) {
          console.log('Autenticación exitosa');
          this.router.navigate(['/menu']);
        } else {
          console.error('Error de autenticación');
          // Manejar el error (por ejemplo, mostrar un mensaje al usuario)
        }
      });
    } else {
      console.error('Formulario no válido. Verifica los campos.');
    }
  }
}
