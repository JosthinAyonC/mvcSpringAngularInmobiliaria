import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { InmuebleComponent } from './pages/inmueble/inmueble.component';
import { EditarInmuebleComponent } from './pages/inmueble/editar-inmueble/editar-inmueble.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent ,
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
  },
  {
    path: 'usuario/editar',
    component: EditarUsuarioComponent,
  },
  {
    path: 'inmueble',
    component: InmuebleComponent,
  },
  {
    path: 'inmueble/editar',
    component: EditarInmuebleComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
