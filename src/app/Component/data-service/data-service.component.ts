import { Component, OnInit } from '@angular/core';
import { BaseDatosService } from '../../Service/base-datos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-service',
  templateUrl: './data-service.component.html',
  styleUrls: ['./data-service.component.css']
})
export class DataServiceComponent implements OnInit {
  datosRecibidos: any;
  grupo: string = '';

  constructor(private baseDatosService: BaseDatosService, private router: Router) {}

  ngOnInit() {
    this.obtenerDatosPorGrupo();
  }

  obtenerDatos() {
    this.baseDatosService.getData().subscribe(
      data => {
        this.datosRecibidos = data;
        console.log('Datos recibidos:', data);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  obtenerDatosPorGrupo() {
    this.baseDatosService.getDataPorGrupo(this.grupo).subscribe(
      data => {
        this.datosRecibidos = data;
        console.log(`Datos recibidos para el grupo ${this.grupo}:`, data);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  
  volverAlMenu():void{
    this.router.navigate(['/menu']);
  }
}