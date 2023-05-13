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
  inmuebleAEditar!: Inmueble;

  toJson(obj: any) {
    return JSON.stringify(obj);
  }

  ngOnInit() {
    this.usuarioService.obtenerPorRoles("ROLE_ASESOR")
    .subscribe((data: Usuario[]) => {
      this.usuariosAsesores = data.filter((usuario: Usuario) => usuario.estado);
    });
    this.usuarioService.obtenerPorRoles("ROLE_CLIENTE")
    .subscribe((data: Usuario[]) => {
      this.usuariosCompradores = data.filter((usuario: Usuario) => usuario.estado);
    });
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem('idInmueble');
    this.inmuebleService.obtenerInmueble(+id!)
    .subscribe(data=>{
      this.inmueble=data;
    })    
  }
  
  Actualizar(inmueble :Inmueble) :void { 
    if (inmueble.usuarioComprador.toString() == '' || inmueble.vendedorEncargado.toString() == '') {
      alert('Seleccione los usuarios');
      return;
    }
    try {
      inmueble.usuarioComprador = JSON.parse(inmueble.usuarioComprador.toString());
      inmueble.vendedorEncargado = JSON.parse(inmueble.vendedorEncargado.toString());
    } catch (e) {}  

    this.inmuebleService.updateInmueble(inmueble.id, inmueble)
    .subscribe(data=>{
      this.inmuebleAEditar=data;
      alert("Se actualizo con exito");
      this.router.navigate(['inmueble']);
    })
  }
  volver(){
    this.router.navigate(['usuario']);
  }
}
