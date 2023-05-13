import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { NuevoUsuarioComponent } from './pages/usuario/nuevo-usuario/nuevo-usuario.component';
import { ModalConfirmComponent } from './pages/usuario/modal-confirm/modal-confirm.component'
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './pages/usuario/editar-usuario/editar-usuario.component';
import { InmuebleComponent } from './pages/inmueble/inmueble.component';
import { EditarInmuebleComponent } from './pages/inmueble/editar-inmueble/editar-inmueble.component';
import { NuevoInmuebleComponent } from './pages/inmueble/nuevo-inmueble/nuevo-inmueble.component';
import { ModalConfirmxInmuebleComponent } from './pages/inmueble/modal-confirmx-inmueble/modal-confirmx-inmueble.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    NavbarComponent,
    NuevoUsuarioComponent,
    ModalConfirmComponent,
    EditarUsuarioComponent,
    InmuebleComponent,
    EditarInmuebleComponent,
    NuevoInmuebleComponent,
    ModalConfirmxInmuebleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
