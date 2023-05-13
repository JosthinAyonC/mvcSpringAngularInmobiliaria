import { Component, EventEmitter, Output } from '@angular/core';
import { InmuebleServiceService } from 'src/app/Service/inmueble-service.service';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Inmueble } from 'src/app/models/Inmueble.model';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-nuevo-inmueble',
  templateUrl: './nuevo-inmueble.component.html',
  styleUrls: ['./nuevo-inmueble.component.css']
})
export class NuevoInmuebleComponent {
  @Output() inmuebleGuardado = new EventEmitter<Inmueble>();

  usuariosAsesores: Usuario[] = [];
  usuarioVendedor!: Usuario;
  constructor(private inmuebleService: InmuebleServiceService, private usuarioService: UsuarioServiceService) {}

  toJson(obj: any) {
    return JSON.stringify(obj);
  }



  guardar(inmueble: Inmueble) {
    if (
      inmueble.tipo == '' ||
      inmueble.precio== null ||
      inmueble.vendedorEncargado.toString() == '' 
      ) {
        alert('Debe llenar todos los campos');
      } else {
      inmueble.estado = "D";    
      inmueble.vendedorEncargado = JSON.parse(inmueble.vendedorEncargado.toString());
      this.inmuebleService.crearNuevo(inmueble).subscribe(() => {
        this.inmuebleGuardado.emit(inmueble);
        alert('Inmueble creado');
      });
    }
  }
  ngOnInit() {
    this.usuarioService.obtenerPorRoles("ROLE_ASESOR")
    .subscribe((data: Usuario[]) => {
      this.usuariosAsesores = data.filter((usuario: Usuario) => usuario.estado);
    });
  }

  emitirEventoUsuarioGuardado(inmueble: Inmueble) {
    this.inmuebleGuardado.emit(inmueble);
  }
}
