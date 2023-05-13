import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InmuebleServiceService } from 'src/app/Service/inmueble-service.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Inmueble } from 'src/app/models/Inmueble.model';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-editar-inmueble',
  templateUrl: './editar-inmueble.component.html',
  styleUrls: ['./editar-inmueble.component.css']
})
export class EditarInmuebleComponent {
  inmueble!:Inmueble;

  constructor( private inmuebleService: InmuebleServiceService, private usuarioService: UsuarioServiceService, private router :Router ) {}

  usuariosAsesores: Usuario[] = [];
  usuariosCompradores: Usuario[] = [];

  ngOnInit() {
    this.usuarioService.obtenerAsesores()
    .subscribe((data: Usuario[]) => {
      this.usuariosAsesores = data.filter((usuario: Usuario) => usuario.estado);
    });
    this.usuarioService.obtenerAsesores()
    .subscribe((data: Usuario[]) => {
      this.usuariosCompradores = data.filter((usuario: Usuario) => usuario.estado);
    });
    this.Editar();
    console.log(this.inmueble);
  }

  Editar(){
    let id=localStorage.getItem('idInmueble');
    this.inmuebleService.obtenerInmueble(+id!)
    .subscribe(data=>{
      this.inmueble=data;
    })    
  }

  Actualizar(inmueble :Inmueble) :void {
    
    this.inmuebleService.updateInmueble(inmueble.id, inmueble)
    .subscribe(data=>{
      alert("Se actualizo con exito");
      this.router.navigate(['inmueble']);
    })
  }
}
