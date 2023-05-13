import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleServiceService } from 'src/app/Service/inmueble-service.service';
import { Inmueble } from 'src/app/models/Inmueble.model';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent {
  inmuebleSeleccionado!: Inmueble;
  inmuebleIdSeleccionado!: number;

  // inmueble: Observable<Inmueble[]> = new Observable<Inmueble[]>();
  constructor(private inmuebleService: InmuebleServiceService, private router:Router) { }
  
  //funcion lista para ser exportada
  obtenerInmueble(inmueble: Inmueble){
    this.inmuebleSeleccionado = inmueble;
  }
  obtenerInmuebleId(inmueble: Inmueble){    
    localStorage.setItem('idInmueble', inmueble.id.toString());
    this.router.navigate(['inmueble/editar']);
  }
  
  inmuebles: Inmueble[] = [];
  ngOnInit() {
    // this.inmueble = this.inmuebleService.listar();
    this.inmuebleService.listar()
    .subscribe((data: Inmueble[]) => {
      this.inmuebles = data.filter((inmueble: Inmueble) => inmueble.estado);
    });
  }
  delete(id: number) {
    this.inmuebleService.eliminar(id)
    .subscribe((data: Inmueble[]) => {
      this.inmuebles = data.filter((inmueble: Inmueble) => inmueble.estado);
    });
  }
  onInmuebleGuardado(inmueble: Inmueble) {
    this.inmuebles.push(inmueble);
  }
}
