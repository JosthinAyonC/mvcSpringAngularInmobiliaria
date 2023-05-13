import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inmueble } from '../models/Inmueble.model';

@Injectable({
  providedIn: 'root'
})
export class InmuebleServiceService {

  constructor(private http: HttpClient) { }
  listar() {
    return this.http.get<Inmueble[]>(`http://localhost:8080/api/inmueble`);
  }
  eliminar(id: number) {
    return this.http.put<Inmueble[]>(`http://localhost:8080/api/inmueble/eliminar/${id}`, null);
  }
  crearNuevo(inmueble: Inmueble){
    return this.http.post<Inmueble>(`http://localhost:8080/api/inmueble`, inmueble);
  }
  obtenerInmueble(id: number){
    return this.http.get<Inmueble>(`http://localhost:8080/api/inmueble/${id}`);
  }
  updateInmueble(id:number ,inmueble: Inmueble){
    return this.http.put<Inmueble>(`http://localhost:8080/api/inmueble/editar/${id}`, inmueble);
  }
}
