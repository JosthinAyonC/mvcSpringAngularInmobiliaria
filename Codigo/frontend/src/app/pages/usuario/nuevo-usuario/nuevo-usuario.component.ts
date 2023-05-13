import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent {
  @Output() usuarioGuardado = new EventEmitter<Usuario>();


  constructor(
    private usuarioService: UsuarioServiceService
  ) {}

  guardar(usuario: Usuario) {
    if (
      usuario.estado == '' ||
      usuario.correo == '' ||
      usuario.clave == '' ||
      usuario.nombre == '' ||
      usuario.apellido == '' ||
      usuario.roles.length == 0
    ) {
      alert('Debe llenar todos los campos');
    } else {
      console.log(usuario);
      usuario.roles = [usuario.roles + ''];

      this.usuarioService.crearNuevoUsuario(usuario).subscribe(() => {
        this.usuarioGuardado.emit(usuario);
        alert('Usuario creado');
      });
    }
  }

  emitirEventoUsuarioGuardado(usuario: Usuario) {
    this.usuarioGuardado.emit(usuario);
  }
}
