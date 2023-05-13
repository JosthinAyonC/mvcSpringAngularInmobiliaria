import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/Service/usuario-service.service';
import { Usuario } from 'src/app/models/Usuario.model';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {
  usuario!: Usuario;

  @Input() idUsuarioAEditar!: Usuario;

  constructor(private usuarioService: UsuarioServiceService, private router:Router) { }

  ngOnInit() {
    this.Editar();
  }
  Editar(){
    let id=localStorage.getItem('idUsuario');
    this.usuarioService.obtenerUnUsuario(+id!)
    .subscribe(data=>{
      this.usuario=data;
    })    
  }
  volver(){
    this.router.navigate(['usuario']);
  }
  Actualizar(usuario :Usuario) :void {
    usuario.roles = [usuario.roles + ''];
    this.usuarioService.updateUsuario(usuario.id, usuario)
    .subscribe(data=>{
      this.usuario=data;
      alert("Se actualizo con exito");
      this.router.navigate(['usuario']);
    })
  }

}
