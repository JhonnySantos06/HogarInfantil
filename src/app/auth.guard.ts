// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> {
  console.log('Evaluando canActivate en AuthGuard...');
  
  return this.authService.checkAuthentication().pipe(
    take(1), // to ensure the observable completes after emitting one value
    map((isAuthenticated) => {
      console.log('Estado de autenticación:', isAuthenticated);

      if (isAuthenticated) {
        console.log('Acceso permitido.');
        return true;
      } else {
        console.log('Acceso denegado. Redirigiendo a la página de inicio de sesión.');
        this.router.navigate(['/login']);
        return false;
      }
    })
  );
}

}
