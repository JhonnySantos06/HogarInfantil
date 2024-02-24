import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private URL= 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getData():Observable<any>{return this.http.get<any>(`${this.URL}/datos`)}

  guardarDatos(data: any) {
    return this.http.post<any>(`${this.URL}/insertarDatos`, data);
  }

  // Método para obtener datos según un grupo
  getDataPorGrupo(grupo: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/datos/${grupo}`);
  }

   // Nuevo método para autenticación
   login(correo: string, contrasena: string): Observable<any> {
    const credentials = { correo, contrasena };
    return this.http.post<any>(`${this.URL}/login`, credentials);
  }

   // método para eliminar datos
   eliminarDatosPorGrupo(grupo: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/datos/${grupo}`);
  }

  // Método para actualizar datos
  actualizarDatosPorGrupo(grupo: string, nuevosDatos: any): Observable<any> {
    return this.http.put<any>(`${this.URL}/datos/${grupo}`, nuevosDatos);
  }
}

  
