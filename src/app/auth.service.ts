// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseDatosService } from './Service/base-datos.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  // Observable público sin capacidad de emisión
  isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(private baseDatosService: BaseDatosService) {}

  login(username: string, password: string): Promise<boolean> {
    return this.baseDatosService.login(username, password)
    .toPromise()
    .then((response: any) => {
      if (response && response.message === 'Inicio de sesión exitoso') {
        this.isAuthenticatedSubject.next(true);
        return true;
      } else {
        this.isAuthenticatedSubject.next(false);
        return false;
      }
    })
    .catch((error) => {
      console.error('Error en el inicio de sesión:', error);
      this.isAuthenticatedSubject.next(false);
      throw error; // Propagar el error para que se pueda manejar en el componente
    });
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }

  checkAuthentication(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable().pipe(take(1));
  }
}
